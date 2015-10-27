class CreateProjectController {

    constructor(FileUploader){
      'ngInject';
      this.uploader = new FileUploader({url:'/pics'});
    }
