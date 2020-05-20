import React, { Component } from 'react';

//QR Reader
import QrReader from 'react-qr-reader';

export class Qr_Reader extends Component {
  state = {
    result: 'No result',
  };

  handleScan = (data) => {
    if (data) {
      this.setState({
        result: data,
      });
      console.log(this.state.result);
    }
  };
  handleError = (err) => {
    console.error(err);
  };
  render() {
    return (
      <div>
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '100%' }}
        />
        <p>{this.state.result}</p>
      </div>
    );
  }
}

export default QrReader;

// <Button
//   color='primary'
//   block
//   onClick={() => setClassicModal(true)}
// >
//   <LibraryBooks className={classes.icon} />
// </Button>
// <Dialog
//   classes={{
//     root: classes.center,
//     paper: classes.modal,
//   }}
//   open={classicModal}
//   TransitionComponent={Transition}
//   keepMounted
//   onClose={() => setClassicModal(false)}
//   aria-labelledby='classic-modal-slide-title'
//   aria-describedby='classic-modal-slide-description'
// >
//   <DialogTitle
//     id='classic-modal-slide-title'
//     disableTypography
//     className={classes.modalHeader}
//   >
//     <h4 className={classes.modalTitle}>송금 정보 페이지</h4>
//   </DialogTitle>
//   <DialogContent
//     id='classic-modal-slide-description'
//     className={classes.modalBody}
//   >
//     제목이 들어갑니다. 결제금액 (결제금액폼) 출금계좌 (출금계좌폼)
//   </DialogContent>
//   <DialogActions className={classes.modalFooter}>
//     <Link to={'/mypage-page'} className={classes.link}>
//       <Button color='transparent' simple>
//         송금하기
//       </Button>
//     </Link>
//     <Button
//       onClick={() => setClassicModal(false)}
//       color='danger'
//       simple
//     >
//       닫기
//     </Button>
//   </DialogActions>
// </Dialog>
