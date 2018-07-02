'use strict';
module.exports = (sequelize, DataTypes) => {
  var users = sequelize.define('users', {
    userid: DataTypes.INTEGER,
    usernames: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};