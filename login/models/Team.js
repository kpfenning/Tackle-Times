const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Team extends Model {
  // static associate(models) {
    
  //   Team.belongsTo(models.User, {
  //     foreignKey: 'user_id', 
  //     onDelete: 'CASCADE', 
  //   });
  // }
}

Team.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    }, 
    team_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageSrc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    altText: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // user_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'user',
    //     key: 'id',
    //   },
    // },
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
