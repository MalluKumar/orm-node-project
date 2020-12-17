const Sequelize = require('sequelize');

// Connecting ORM to database and creating database named movies.db
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "movies.db"
});

// async IIFE (immediately invoked function expression)
(async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection to the database is successful!!");
    } catch (err) {
        console.error("Error connecting to the database", err);
    }
})();
