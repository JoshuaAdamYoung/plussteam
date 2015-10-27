class HomeController {

  constructor(mainConfig){
    'ngInject';
    this.config = mainConfig;
    this.init = mainConfig.openSidenav();
  }


    close(){
      this.config.closeSidenav();
    }

}

export default HomeController;
