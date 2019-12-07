'use strict';
module.exports = (sequelize, DataTypes) => {
  const Coder = sequelize.define('Coder', {
    name: DataTypes.STRING,
    expertise: DataTypes.STRING
  }, {});
  Coder.associate = function(models) {
    // associations can be defined here
  };
  return Coder;
};