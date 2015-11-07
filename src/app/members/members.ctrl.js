class MembersController {
  constructor(UserService, $firebaseObject, $firebaseArray, Firebase, $log){
    this.$log = $log;
    this.svc = UserService;
    this.usersRef = UserService.usersRef;
    this.userRef = UserService.userRef;
    this.members = $firebaseObject(UserService.usersRef);
  }

  messageMember(item, index){
    let that = this;
    let data = that.svc.getData();
    let sender = data.firstName + ' ' + data.lastName;
    that.$log.debug(index);
    that.$log.debug(sender);
    that.usersRef.child(index).child('messages').push({
      message:item.txt,
      sender: sender,
      sentOn: Date.now()
    });
  }

}

export default MembersController;
