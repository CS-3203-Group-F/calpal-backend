const express = require("express");
const groupsController = require("../controllers/groupsController");
const router = express.Router();

router.get("/groups/:userId", groupsController.getGroupsByUserId); // Define the route for the getGroupsByUserId controller

router.get("/group/:groupId", groupsController.getGroupDetailsById); // Define the route for the getGroupDetailsById controller

router.get("/group/members/:groupId", groupsController.getGroupMembers); // Define the route for the getGroupMembers controller

router.post("/createGroup", groupsController.CreateGroup); // Define the route for the CreateGroup controller

module.exports = router; // Export the router object
