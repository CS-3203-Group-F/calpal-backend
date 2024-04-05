class User { //Sprint 1 Issue #4 User Authentication
    constructor(id, email, password, firstName, lastName) {
      this.id = id;
      this.email = email;
      this.password = password;
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    // Add methods to interact with the database here, such as findById, findByEmail, etc.
  }
  
  module.exports = User;
  