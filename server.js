const express = require("express");
const cors = require("cors");
const db = require("./models/db");
const eventsRoutes = require("./routes/eventsRoutes");
const authRoutes = require("./routes/authRoutes");
const session = require("express-session");
const passport = require("./passport/passportConfig");
const flash = require("connect-flash");

const app = express();
const port = process.env.PORT || 3001;

// configure session middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000", // Adjust according to your frontend host
    credentials: true,
  })
);
app.use(flash());

// Initialize passport
app.use(passport.initialize());
app.use(passport.session());

// Test route
app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

// Set up routes
app.use("/", eventsRoutes);
app.use("/", authRoutes);

// Check if the server is running
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
