'use strict';
module.exports = (sequelize, DataTypes) => {
  const Coder = sequelize.define('Coder', {
    name: DataTypes.STRING,
    expertise: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    img: DataTypes.STRING
  }, {});
  Coder.associate = function (models) {
    // associations can be defined here
    Coder.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    })
  };
  return Coder;
};