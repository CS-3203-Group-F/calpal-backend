const passport = require("passport");
const LocalStrategy = require('./localStrategy');




passport.use(LocalStrategy);


passport.serializeUser((user, done) => {
  done(null, user.email);
});

passport.deserializeUser(async (id, done) => {
    const { rows } = await db.query('SELECT * FROM users WHERE id = $1', [id]);
    const user = rows[0];
    done(null, user);
  });

module.exports = passport;