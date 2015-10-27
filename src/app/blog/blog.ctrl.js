class BlogController {
  constructor ($firebaseArray, $firebaseObject, Firebase) {
    'ngInject';
    this.ref = new Firebase('https://plussteam.firebaseio.com/site');
    this.blogRef = this.ref.child('blog');
    this.blogs = $firebaseArray(this.blogRef);
    this.showComments = false;
  }

  openComments(){
    this.showComments = !this.showComments;
  }
  
}

export default BlogController;
