const express = require("express");
const groupsService = require("../services/groupsService");

// controller for getting groups by user ID takes a request and response object as arguments
const getGroupsByUserId = async (req, res) => {
  try {
    // destructure the user ID from the request parameters
    const userId = req.params.userId;
    // call the getGroupIdsByUserId method from the groupsService with the user ID as an argument
    const groups = await groupsService.getGroupIdsByUserId(userId);
    res.json(groups);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// controller for getting group details by ID takes a request and response object as arguments
const getGroupDetailsById = async (req, res) => {
  try {
    // destructure the group ID from the request parameters
    const groupId = req.params.groupId;
    // call the getGroupDetailsById method from the groupsService with the group ID as an argument
    const groupDetails = await groupsService.getGroupDetailsById(groupId);
    res.json(groupDetails);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// controller for getting group members takes a request and response object as arguments
const getGroupMembers = async (req, res) => {
  try {
    // destructure the group ID from the request parameters
    const groupId = req.params.groupId;
    // call the getGroupMembers method from the groupsService with the group ID as an argument
    const groupMembers = await groupsService.getGroupMembers(groupId);
    res.json(groupMembers);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// controller for creating a new group takes a request and response object as arguments
const CreateGroup = async (req, res) => {
  try {
    // destructure the group data from the request body
    const groupData = req.body;
    // call the createGroup method from the groupsService with the group data as an argument
    const newGroup = await groupsService.createGroup(groupData);
    res.json(newGroup);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

module.exports = {
  CreateGroup,
  getGroupDetailsById,
  getGroupsByUserId,
  getGroupMembers,
};
