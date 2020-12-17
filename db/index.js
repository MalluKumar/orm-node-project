const Sequelize = require('sequelize');

// Connecting ORM (Sequelize) to database and creating database named movies.db
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "movies.db"
    // logging: false to disable logging SQL queries onto the console.
});

const db = {
    sequelize,
    Sequelize,
    models: {},
};

db.models.Movie = require('./models/movie.js')(sequelize);

module.exports = db;