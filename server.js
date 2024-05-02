// Required imports
const express = require("express");
const cors = require("cors");
const eventsRoutes = require("./routes/eventsRoutes");
const authRoutes = require("./routes/authRoutes");
const docRoutes = require("./routes/docRoutes");
const session = require("express-session");
const passport = require("./passport/passportConfig");
const flash = require("connect-flash");
const app = express(); // Create an express application
const port = process.env.PORT || 3001; // Set the port to 3001 if it is not set in the environment variables

// Configure session middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(express.json()); // Used to parse JSON bodies
app.use(express.static("public")); // Serve static files from the public directory

// Configure CORS middleware to allow requests from the frontend for specific origins
app.use(
  cors({
    origin: ["http://localhost:3000", "http://72.219.206.78"], // Adjust according to your frontend hosts
    credentials: true,
  })
);

app.use(flash()); // Flash messages

// Initialize passport
app.use(passport.initialize());
app.use(passport.session());

// Set up routes
app.use("/", eventsRoutes);
app.use("/", authRoutes);
app.use("/", docRoutes);

// Log to check if the server is running
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
