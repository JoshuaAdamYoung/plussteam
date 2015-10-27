class MockProjects {
  constructor () {
    'ngInject';

    this.data = [{
      title : 'Maker Space Project',
      image: 'assets/images/project1.jpg',
      description: 'This is a generic description until I can think of something better to type in for each particular project.',
      ingredients: ['Science', 'Technology'],
      percentDone: 50
    },{
      title : 'Maker Space Project',
      image: 'assets/images/project2.jpg',
      description: 'This is a generic description until I can think of something better to type in for each particular project.',
      ingredients: ['Art'],
      percentDone: 25
    }, {
      name : 'Maker Space Project',
      image: 'assets/images/project3.jpg',
      description: 'This is a generic description until I can think of something better to type in for each particular project.',
      ingredients: ['Technology', 'Art'],
      percentDone: 15
    },{
      name : 'Maker Space Project',
      image: 'assets/images/project4.jpg',
      description: 'This is a generic description until I can think of something better to type in for each particular project.',
      ingredients: ['Mechanics', 'Engineering'],
      percentDone: 90
    },{
      name : 'Maker Space Project',
      image: 'assets/images/project5.svg',
      description: 'This is a generic description until I can think of something better to type in for each particular project.',
      ingredients: ['Business', 'Technology'],
      percentDone: 70
    }];
  }

  getData() {
    return this.data;
  }
}

export default MockProjects;
