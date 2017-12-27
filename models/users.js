'use strict';
module.exports = (sequelize, DataTypes) => {
  var users = sequelize.define('users', {
    email: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    password_hashed: DataTypes.STRING,
    password: DataTypes.VIRTUAL
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return users;
};