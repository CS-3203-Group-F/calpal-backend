const express = require("express");
const cors = require("cors");
const db = require("./models/db");
const eventsRoutes = require("./routes/eventsRoutes");

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

// Test route
app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

// Define an async function
const startDB = async () => {
  try {
    await db.sequelize.authenticate();
    console.log("Database connection successful");
  } catch (err) {
    console.error("Unable to connect to the database:", err);
    process.exit(1);
  }

  await db.sequelize.sync({ force: false });
};

startDB();
setTimeout(() => {
  console.log("10 seconds have passed.");
}, 10000); // 10000 milliseconds = 10 seconds

// Set up routes
app.use("/", eventsRoutes);

// Check if the server is running
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
