const express = require("express");
const cors = require("cors");
const db = require("./models/db"); // Assuming you have an index.js file in your models directory that imports all models
const eventsRoutes = require("./routes/eventsRoutes");

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

// Test route
app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

// Test the database connection
db.sequelize.authenticate()
  .then(() => {
    console.log('Database connection successful');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
    process.exit(1);
  });

// Set up routes
app.use("/", eventsRoutes);

// Check if the server is running
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
