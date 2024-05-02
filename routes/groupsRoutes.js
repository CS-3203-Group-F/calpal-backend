const express = require("express");
const groupsController = require("../controllers/groupsController");
const router = express.Router();

// Route to get groups by user ID
router.get("/groups/:userId", groupsController.getGroupsByUserId);

// Route to get group details by group ID
router.get("/group/:groupId", groupsController.getGroupDetailsById);

// Route to get group members by group ID
router.get("/group/members/:groupId", groupsController.getGroupMembers);

// Route to create a new group
router.post("/createGroup", groupsController.CreateGroup);
