class MockProjects {
  constructor () {
    'ngInject';

    this.data = [{
      title: 'Add a project',
      image: 'assets/images/addproject.png',
      description: ' ',
      types: [],
      percentDone: '',
      style: 'success'
    },{
      title: 'Maker Space Project',
      image: 'assets/images/project1.jpg',
      description: 'This is a generic description until I can think of something better to type in for each particular project.',
      types: ['Science', 'Technology'],
      percentDone: 50,
      style: 'warning'
    },{
      title: 'Maker Space Project',
      image: 'assets/images/project2.jpg',
      description: 'This is a generic description until I can think of something better to type in for each particular project.',
      types: ['Art'],
      percentDone: 25,
      style: 'dark'
    }, {
      title: 'Maker Space Project',
      image: 'assets/images/project3.jpg',
      description: 'This is a generic description until I can think of something better to type in for each particular project.',
      types: ['Technology', 'Art'],
      percentDone: 15,
      style: 'primary'
    },{
      title: 'Maker Space Project',
      image: 'assets/images/project4.jpg',
      description: 'This is a generic description until I can think of something better to type in for each particular project.',
      types: ['Mechanics', 'Engineering'],
      percentDone: 90,
      style: 'alert'
    },{
      title: 'Maker Space Project',
      image: 'assets/images/project5.jpg',
      description: 'This is a generic description until I can think of something better to type in for each particular project.',
      types: ['Business', 'Technology'],
      percentDone: 70,
      style: 'success'
    }];
  }

  getData(){
    return this.data;
  }
}

export default MockProjects;
