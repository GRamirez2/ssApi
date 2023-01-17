import { Sequelize } from 'sequelize';

//database wide options
const opts = {
    define: {
        //prevent sequelize from pluralizing table names
        freezeTableName: true
    }
}

export const db = new Sequelize(process.env.PG_DATABASE, process.env.PG_USER, process.env.PG_PASSWORD, {
    dialect: 'postgres',
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    pool :{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}, opts);
