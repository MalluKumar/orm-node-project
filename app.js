const db = require('./db');
const { Movie } = db.models; // same as const Movie = db.models.Movie

// async IIFE (immediately invoked function expression)
(async () => {
    try {
        // testing the connection to the database.
        await db.sequelize.authenticate();
        console.log("Connection to the database is successful!!");

        // Sync all table or model with the database.
        await db.sequelize.sync({ force: true }); //force:true drops table if exists and create new table every time.

        // Instance of Movie class
        await Movie.create({
            title: "KGF"
        });

        await Movie.create({
            title: "MK"
        });

    } catch (err) {
        console.error("Error connecting to the database", err);
    }
})();
