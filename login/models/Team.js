const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Team extends Model {
  static associate(models) {
    
    Team.belongsTo(models.User, {
      foreignKey: 'user_id', 
      onDelete: 'CASCADE', 
    });
  }
}

Team.init(
  {
    name: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    imageSrc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    altText: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'team',
  }
);

module.exports = Team;
