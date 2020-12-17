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
        const movie1 = await Movie.create({
            title: "KGF",
            runtime: 80,
            releaseDate: "2020-09-12",
            isAvailableOnVHS: true
        });

        const movie2 = await Movie.create({
            title: "KF",
            runtime: 50,
            releaseDate: "2020-09-23",
            isAvailableOnVHS: true
        });

        console.log(movie1.toJSON());
        console.log(movie2.toJSON());

    } catch (err) {
        console.error("Error connecting to the database", err);
    }

})();
