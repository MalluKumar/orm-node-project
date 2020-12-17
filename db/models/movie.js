const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    // table creation
    class Movie extends Sequelize.Model { }

    // intializing the model and define columns for the table.
    Movie.init({ title: Sequelize.STRING }, { sequelize }); // same as {sequelize : sequelize}

    return Movie;
};