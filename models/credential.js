"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Credential extends Model {
    static associate(models) {
    }
  }
  Credential.init(
    {
      emailId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: "UserDetails",
          },
          key: "id",
        },
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Credential",
    }
  );
  Credential.associate = function (models) {
    Credential.belongsTo(models.UserDetails, {
      foreignKey: "userId",
    });
  };
  return Credential;
};
