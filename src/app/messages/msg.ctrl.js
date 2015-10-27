class MessageController {
  constructor ($firebaseArray, $firebaseObject, Firebase) {
    'ngInject';
    this.ref = new Firebase('https://plussteam.firebaseio.com/site');
    this.msgRef = this.ref.child('messages');
    this.messages = $firebaseArray(this.msgRef);
    this.showComments = false;
  }

  openComments(){
    this.showComments = !this.showComments;
  }


    sendMsg(form){
      var now = Date.now();
      this.msgRef.push({
        text: form.msg,
        author: 'Anonymous',
        postedOn: now
      });
    }

}

export default MessageController;
