class User { //Sprint 1 Issue #4 User Authentication
    constructor(id, email, password, firstName, lastName) {
      this.id = id;
      this.email = email;
      this.password = password;
      this.firstName = firstName;
      this.lastName = lastName;
    }

    static fromJSON(jsonObj) { //Sprint 1 Issue #4 User Authentication
      //console.log(jsonObj);
      return new User(jsonObj.id, jsonObj.email, jsonObj.passwordhash, jsonObj.first_name, jsonObj.last_name);
    }
    

  
    
  }
  
  module.exports = User;
  