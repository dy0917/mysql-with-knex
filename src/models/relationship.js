const { DataTypes, Model } = require('sequelize');
const User = require('./user');
let dbConnect = require('../db');
const sequelizeInstance = dbConnect.Sequelize;

var Relationship = sequelizeInstance.define(
  'relationships',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    EmployeeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    EmployerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeInstance,
    timestamps: false,
    freezeTableName: true,
  }
);

// Establish associations
User.belongsToMany(User, { as: 'Employers', through: Relationship, foreignKey: 'employeeId', otherKey: 'employerId' });
User.belongsToMany(User, { as: 'Employees', through: Relationship, foreignKey: 'employerId', otherKey: 'employeeId' });

// Also establish direct belongsTo relationships for querying
Relationship.belongsTo(User, { as: 'Employer', foreignKey: 'employerId' });
Relationship.belongsTo(User, { as: 'Employee', foreignKey: 'employeeId' });


module.exports = Relationship;
