const passport = require("passport");
const LocalStrategy = require("./localStrategy");
const db = require("../models/db");

passport.use(LocalStrategy);

passport.serializeUser((user, done) => {
  done(null, user.user_id);
});

passport.deserializeUser(async (id, done) => {
  try {
    // Use Sequelize's findByPk method to fetch the user by primary key from the database
    const user = await db.User.findByPk(id);
    done(null, user); // user will be null if not found, which is handled by Passport
  } catch (error) {
    done(error);
  }
});

module.exports = passport;
