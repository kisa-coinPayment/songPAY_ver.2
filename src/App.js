import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'park',
    };
    this.DB = this.DB.bind(this);
  }
  DB() {
    console.log(this.state.username);

    fetch('http://localhost:3001/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName: this.state.username,
      }),
    });
  }

  render() {
    const { username } = this.state;
    return (
      <div className='App'>
        <header className='App-header'>{`Hello ${username}`}</header>
        <a href='https://testapi.openbanking.or.kr/oauth/2.0/authorize?response_type=code&client_id=HxTaO0dyeVPIepwel60gaJT2uCwCod8dwbWGH24m&redirect_uri=http://localhost:3000/authResult&scope=login inquiry transfer&state=12345678901234567890123456789012&auth_type=0'>
          본인인증
        </a>
        <button onClick={this.DB}>DB 데이터 연동</button>
      </div>
    );
  }
}
