const { DataTypes } = require("sequelize");

module.exports = groupModel;

function groupModel(sequelize) {
    const attributes = {
        group_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true, // This ensures it behaves as a serial field
        },
        group_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        group_description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        group_owner: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        group_color: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        isPrivate: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
    };

    const options = {
        timestamps: false,
    };

    return sequelize.define("Group", attributes, options);
}