const db = require("../models/db");

// Get group IDs associated with a user ID
const getGroupIdsByUserId = async (userId) => {
  try {
    // Fetch the user with associated groups with squelize's findByPk method
    const UserwithGroups = await db.User.findByPk(userId, {
      include: [
        // Include the Group model and fetch only the group_id
        {
          model: db.Group,
          attributes: ["group_id"],
          through: {
            attributes: ["group_id"],
          },
        },
      ],
    });

    // If the user is not found, throw an error
    if (!UserwithGroups) {
      throw new Error("User not found");
    }
    // Map through the groups to extract only the group IDs
    const groupIds = UserwithGroups.Groups.map(
      (group) => group.UsersGroups.group_id
    );
    // Return the group IDs
    return groupIds;
  } catch (err) {
    // If an error occurs, log the error and throw a new error
    throw new Error(
      `Unable to retrieve group IDs for user ${userId}: ${err.message}`
    );
  }
};


const getGroupDetailsById = async (groupId) => {
  try {
    // Find the group in the database with the provided ID using Sequelize's findOne method
    const group = await db.Group.findOne({
      where: { group_id: groupId },
    });
    // return the group details as a JSON object
    return group ? group.toJSON() : null;
  } catch (err) {
    // If an error occurs, log the error and throw a new error
    throw new Error(
      `Unable to retrieve group details for group ${groupId}: ${err.message}`
    );
  }
};
// Get group members by group ID
const getGroupMembers = async (groupId) => {
  try {
    // Find the group in the database with the provided ID using Sequelize's findOne method
    const group = await db.Group.findOne({
      where: { group_id: groupId },
      // Include the User model and fetch only the user_id
      include: [
        {
          model: db.User,
          attributes: ["user_id"],
          through: {
            attributes: ["user_id"],
          },
        },
      ],
    });
    // If the group is not found, throw an error
    if (!group) {
      throw new Error("Group not found");
    }
    // Map through the users to extract only the user IDs
    const groupMembers = group.Users.map((user) => user.UsersGroups.user_id);
    // Return the group members
    return groupMembers;
  } catch (err) {
    // If an error occurs, log the error and throw a new error
    throw new Error(
      `Unable to retrieve group members for group ${groupId}: ${err.message}`
    );
  }
};

// Create a new group in the database with the provided group data
const createGroup = async (groupData) => {
  try {
    // Create a new group in the database using Sequelize's create method with the provided data
    const newGroup = await db.Group.create({
      group_name: groupData.group_name,
      group_description: groupData.group_description,
      group_owner: groupData.group_owner,
      group_color: groupData.group_color,
      image: groupData.image,
      isPrivate: groupData.isPrivate,
    });
    // Return the new group as a JSON object
    return newGroup.toJSON();
  } catch (err) {
    // If an error occurs, log the error and throw a new error
    throw new Error(`Unable to create group: ${err.message}`);
  }
};

module.exports = {
  createGroup,
  getGroupIdsByUserId,
  getGroupDetailsById,
  getGroupMembers,
};
