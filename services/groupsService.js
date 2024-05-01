const db = require("../models/db");

const getGroupIdsByUserId = async (userId) => {
    try {
        const UserwithGroups = await db.User.findByPk(userId, {
            include: [
                {
                    model: db.Group,
                    attributes: ["group_id"],
                    through: {
                        attributes: ["group_id"],
                    },
                },
            ],
        });
        
        if (!UserwithGroups) {
            throw new Error("User not found");
        }

        const groupIds = UserwithGroups.Groups.map(
            (group) => group.UsersGroups.group_id
        );
        return groupIds;
    }catch (err) {
        throw new Error(`Unable to retrieve group IDs for user ${userId}: ${err.message}`);
    }
};

const getGroupDetailsById = async (groupId) => {
    try {
        const group = await db.Group.findOne({
            where: { group_id: groupId },
        });
        return group ? group.toJSON() : null;
    } catch (err) {
        throw new Error(
            `Unable to retrieve group details for group ${groupId}: ${err.message}`
        );
    }
};

const getGroupMembers = async (groupId) => {
    try {
        const group = await db.Group.findOne({
            where: { group_id: groupId },
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
        if (!group) {
            throw new Error("Group not found");
        }
        const groupMembers = group.Users.map(
            (user) => user.UsersGroups.user_id
        );
        return groupMembers;
    } catch (err) {
        throw new Error(
            `Unable to retrieve group members for group ${groupId}: ${err.message}`
        );
    }
};

const createGroup = async (groupData) => {
    try {
        const newGroup = await db.Group.create({
            group_name: groupData.group_name,
            group_description: groupData.group_description,
            group_owner: groupData.group_owner,
            group_color: groupData.group_color,
            image: groupData.image,
            isPrivate: groupData.isPrivate,
        });
        return newGroup.toJSON();
        }catch (err) {
            throw new Error(`Unable to create group: ${err.message}`);
        }
        
};

module.exports = { getGroupIdsByUserId, getGroupDetailsById, getGroupMembers };