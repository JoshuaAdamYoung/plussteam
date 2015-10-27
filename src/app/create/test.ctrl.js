class TestController {
  constructor ($firebaseArray, $firebaseObject, Firebase) {
    'ngInject';
    this.ref = new Firebase('https://plussteam.firebaseio.com/site');
    this.data = $firebaseObject(this.ref);
    this.blogRef = this.ref.child('blog');
    this.msgRef = this.ref.child('blog');
    this.blogs = $firebaseArray(this.blogRef);
    this.messages = $firebaseArray(this.msgRef);
    this.blogFormOpen = false;
    this.msgFormOpen = false;
  }

  newBlog(form){
    var now = Date.now();
    this.msgRef.push({
      title: form.title,
      text: form.msg,
      author: form.author,
      likes: 0,
      comments: {},
      postedOn: now
    });
  }

  newMessage(form){
    var now = Date.now();
    this.msgRef.push({
      text: form.msg,
      author: form.author,
      postedOn: now
    });
  }

  openBlogForm(){
    this.blogFormOpen = !this.blogFormOpen;
  }

  openMsgForm(){
    this.msgFormOpen = !this.msgFormOpen;
  }

}

export default TestController;
