class User {
  //Sprint 1 Issue #4 User Authentication
  constructor(email, password, firstName, lastName) {
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  static fromJSON(jsonObj) {
    //Sprint 1 Issue #4 User Authentication
    return new User(
      jsonObj.email,
      jsonObj.passwordhash,
      jsonObj.first_name,
      jsonObj.last_name
    );
  }
}

module.exports = User;
