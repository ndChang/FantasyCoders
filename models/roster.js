'use strict';
module.exports = (sequelize, DataTypes) => {
  const Roster = sequelize.define('Roster', {
    user_id: {
      type:DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
        as: 'userId'
      }
    },
    coder_id: DataTypes.INTEGER
  }, {});
  Roster.associate = function(models) {
    // associations can be defined here
    Roster.hasMany(models.Coder, {
      foreignKey: 'rosterId'
    })
    Roster.belongsTo(models.User, {
      foreignKey: 'userId'
    })
  };
  return Roster;
};