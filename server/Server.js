const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;

//MySQL 연동
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1q2w3e4r',
  database: 'fintech',
});

connection.connect();

// React JS + Node JS 서버 연결
app.use(cors());

//JSON 형식 사용
app.use(bodyParser.json());

// app.use('/api', (req, res) => res.json({ username: 'bryan' }));
app.use('/api', (req, res) => {
  var sql =
    'INSERT INTO fintech.user (name, email, password, accesstoken, refreshtoken, userseqno) VALUES (?,?,?,?,?,?)';
  connection.query(
    sql, // excute sql
    [
      req.body.userName,
      req.body.email,
      req.body.password,
      req.body.accesstoken,
      req.body.refreshtoken,
      req.body.userseqno,
    ], // ? <- value
    function (err, result) {
      if (err) {
        console.error(err);
        res.json(0);
        throw err;
      } else {
        res.json(1);
      }
    }
  );
});

app.get('/authResult', function (req, res) {
  var authCode = req.query.code;
  console.log(authCode);
  var option = {
    method: 'POST',
    url: 'https://testapi.openbanking.or.kr/oauth/2.0/token',
    header: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    form: {
      code: authCode,
      client_id: 'HxTaO0dyeVPIepwel60gaJT2uCwCod8dwbWGH24m',
      client_secret: 'XFoOqPP7IUOaW0H9VGwcdjtYZa25mc5KKl1yoeKC',
      redirect_uri: 'http://localhost:3002/authResult',
      grant_type: 'authorization_code',
    },
  };
  request(option, function (err, response, body) {
    if (err) {
      console.error(err);
      throw err;
    } else {
      var accessRequestResult = JSON.parse(body);
      console.log(accessRequestResult);
      res.render('resultChild', { data: accessRequestResult });
    }
  });
});

app.listen(port, () => {
  console.log(`express is running on ${port}`);
});
