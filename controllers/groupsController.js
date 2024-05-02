const express = require("express");
const groupsService = require("../services/groupsService");

const getGroupsByUserId = async (req, res) => {
  try {
    const userId = req.params.userId;
    const groups = await groupsService.getGroupIdsByUserId(userId);
    res.json(groups);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const getGroupDetailsById = async (req, res) => {
  try {
    const groupId = req.params.groupId;
    const groupDetails = await groupsService.getGroupDetailsById(groupId);
    res.json(groupDetails);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const getGroupMembers = async (req, res) => {
  try {
    const groupId = req.params.groupId;
    const groupMembers = await groupsService.getGroupMembers(groupId);
    res.json(groupMembers);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const CreateGroup = async (req, res) => {
  try {
    const groupData = req.body;
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
