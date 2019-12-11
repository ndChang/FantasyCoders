'use strict';
module.exports = (sequelize, DataTypes) => {
  const Coder = sequelize.define('Coder', {
    name: DataTypes.STRING,
    expertise: DataTypes.STRING,
    rosterId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Roster',
        key: 'id',
        as: 'rosterId'
      }
    }
  }, {});
  Coder.associate = function(models) {
    // associations can be defined here
    Coder.belongsTo(models.Roster, {
      foreignKey: 'rosterId'
    })
  };
  return Coder;
};