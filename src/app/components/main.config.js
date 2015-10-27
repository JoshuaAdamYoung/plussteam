class ConfigService {
  constructor () {
    'ngInject';
    this.sideNav = true;
  }

  openSidenav(){
    this.sideNav = true;
  }

  closeSidenav(){
    this.sideNav = false;
  }

  isSidenavOpen() {
    return this.sideNav;
  }

}

export default ConfigService;
