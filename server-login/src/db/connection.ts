import { Sequelize } from "sequelize";

const db = new Sequelize('usuarios', 'root', '',{
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

export default db;