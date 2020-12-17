const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    // table creation
    class Movie extends Sequelize.Model { }

    // intializing the model and define columns for the table.
    Movie.init({
        id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        title: {
            type: Sequelize.STRING,
            allowNull: false, // to not insert 'null' keyword for empty fields.
            validate: {
                notEmpty: {
                    msg: "Please enter value for title."
                },
                notNull: {
                    msg: "Please enter value for title."
                }
            } // to validate incorrect records.
        },
        runtime: { type: Sequelize.INTEGER, allowNull: false, validate: { notNull: { msg: "Please enter value." }, min: { args: 1, msg: "Provide a value greater than zero." } } },
        releaseDate: { type: Sequelize.DATEONLY, allowNull: false, validate: { notNull: { msg: "Enter a value." }, isAfter: { args: '1895-12-27', msg: "Provide a value after 1895-12-27" } } },
        isAvailableOnVHS: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false }
    }, {
        modelName: "movie", // set table or model name to movie.
        sequelize
    });

    return Movie;
};