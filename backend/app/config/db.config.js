module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Pleycowabo.05",
    DB: "tutorial_db",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 3000,
        idle: 10000
    }
};