'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users_videos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  users_videos.init({
    u_id: DataTypes.INTEGER,
    v_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'users_videos',
  });
  return users_videos;
};