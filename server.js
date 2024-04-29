require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./models/db");
const eventsRoutes = require("./routes/eventsRoutes");
const authRoutes = require("./routes/authRoutes");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require('./passport/localStrategy');
const flash = require('express-flash');


const app = express();
const port = process.env.PORT || 3001;

// configure session middleware
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));

app.use(express.json());
app.use(cors());
//app.use(flash());

// Initialize passport
app.use(passport.initialize());
app.use(passport.session());

passport.use('local',LocalStrategy);
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const { rows } = await db.query('SELECT * FROM users WHERE id = $1', [id]);
  const user = rows[0];
  done(null, user);
});

// Test route
app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

// Function to test the database connection
const testDbConnection = async () => {
  try {
    const res = await db.query("SELECT NOW()");
    console.log(`Database connection successful: ${res.rows[0].now}`);
  } catch (err) {
    console.error(`Failed to connect to the database: ${err.message}`);
    process.exit(1); // Exit the application if there is a connection error
  }
};

// Call the function to test the DB connection
testDbConnection();

// Set up routes
app.use("/", eventsRoutes);
app.use("/", authRoutes);

// Check if the server is running
app.listen(port, () => {
  console.log("Server is running on port 3001");
});
