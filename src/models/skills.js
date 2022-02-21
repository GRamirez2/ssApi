import { DataTypes} from 'sequelize';
import { sequalize } from '../utils/dbConnect';

const Skills = sequalize.define('skills',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    primaryTech: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    secondaryTech: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    desiredTech:{
        type: DataTypes.STRING,
        allowNull: false,
    }
});

module.exports = Skills;