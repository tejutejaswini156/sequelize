"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserDetails extends Model {
    static associate(models) {
    }
  }
  UserDetails.init(
    {
      name: DataTypes.STRING,
      phoneNo: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "UserDetails",
    }
  );
  UserDetails.associate = function (models) {
    UserDetails.hasOne(models.Credential);
  };
  return UserDetails;
};
