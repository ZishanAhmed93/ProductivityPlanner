'use strict';
module.exports = (sequelize, DataTypes) => {
  var Tasks = sequelize.define('Tasks', {
    taskName: DataTypes.STRING,
    description: DataTypes.TEXT,
    priority: DataTypes.INTEGER,
    dateDue: DataTypes.DATE,
    completed: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Tasks;
};