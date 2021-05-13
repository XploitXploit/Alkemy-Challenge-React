class Auth {
    constructor() {
      this.authenticated = false;
    }
  
    login(cb) {
      if(localStorage.getItem('loged')===true){
        this.authenticated = true;
      cb();
      console.log(this.isAuthenticated)
      }
    }
  
    logout(cb) {
      this.authenticated = false;
      cb();
    }
  
    isAuthenticated() {
      return this.authenticated;
    }
  }
  
  export default new Auth();