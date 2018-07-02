'use strict';
module.exports = (sequelize, DataTypes) => {
  var access_tokens = sequelize.define('access_tokens', {
    userid: DataTypes.INTEGER,
    access_token: DataTypes.STRING,
    is_revoked: DataTypes.BOOLEAN
  }, {});
  access_tokens.associate = function(models) {
    // associations can be defined here
  };
  return access_tokens;
};