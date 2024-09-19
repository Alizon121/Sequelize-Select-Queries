'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Puppy extends Model {

    static associate(models) {
    }
  };
  Puppy.init({
    name: DataTypes.STRING,
    ageYrs: DataTypes.FLOAT,
    breed: DataTypes.STRING,
    weightLbs: DataTypes.INTEGER,
    microchipped: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Puppy',
  });
  return Puppy;
};