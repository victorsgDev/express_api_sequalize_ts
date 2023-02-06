import { Sequelize } from "sequelize-typescript";
import { Todo } from "../model/Todo";

const connection = new Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "root",
    database: "todos",
    logging: false,
    models: [Todo],
});

export default connection;