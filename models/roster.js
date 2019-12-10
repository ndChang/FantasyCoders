'use strict';
module.exports = (sequelize, DataTypes) => {
  const Roster = sequelize.define('Roster', {
    user_id: DataTypes.INTEGER,
    coder_id: DataTypes.INTEGER
  }, {});
  Roster.associate = function(models) {
    // associations can be defined here
  };
  return Roster;
};