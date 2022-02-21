import { DataTypes } from 'sequelize';
import { sequalize } from '../utils/dbConnect'

console.log('employee sequelize', sequalize)

const Employee = sequalize.define('employee',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    manager:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    seniorityLevel: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

module.exports = Employee;

// add photo later
//  photo: {},