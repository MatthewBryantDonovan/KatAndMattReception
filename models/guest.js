'use strict';
module.exports = (sequelize, DataTypes) => {
  const Guest = sequelize.define('Guest', {
    name: {
      type: DataTypes.STRING,
      unique: true
    },
    amount: DataTypes.INTEGER,
    comment: DataTypes.TEXT,
    attending: DataTypes.BOOLEAN
  }, {});
  Guest.associate = function(models) {
    // associations can be defined here
  };
  return Guest;
};