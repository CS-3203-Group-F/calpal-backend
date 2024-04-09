const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

// Import your DB model
const db = require('./db');

function initialize(passport) {
  const authenticateUser = async (email, password, done) => {
    // Check for user in the database
    const { rows } = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    const user = rows[0];
    
    if (user == null) { // If the user is not found
      return done(null, false, { message: 'No user with that email' });
    }

    try { // If the user is found, check if the password is correct
      if (await bcrypt.compare(password, user.password)) { // If the password is correct
        return done(null, user);
      } else {
        return done(null, false, { message: 'Password incorrect' }); // If the password is incorrect
      }
    } catch (e) {
      return done(e);
    }
  };

  passport.use(new LocalStrategy({ usernameField: 'email' }, authenticateUser)); 
  passport.serializeUser((user, done) => done(null, user.id)); // Serialize the user 
  passport.deserializeUser(async (id, done) => { // Deserialize the user
    const { rows } = await db.query('SELECT * FROM users WHERE id = $1', [id]);
    done(null, rows[0]);
  });
}

module.exports = initialize;
