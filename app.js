const db = require('./db');
const { Movie, Person } = db.models; // same as const Movie = db.models.Movie

// async IIFE (immediately invoked function expression)
(async () => {
    try {
        // testing the connection to the database.
        await db.sequelize.authenticate();
        console.log("Connection to the database is successful!!");

        // Sync all table or model with the database.
        await db.sequelize.sync({ force: true }); //force:true drops table if exists and create new table every time.

        // Instance of Movie class
        const movie1 = await Movie.create({ // creating new record using 'create' method.
            title: "KGF",
            runtime: 80,
            releaseDate: "2020-09-12",
            isAvailableOnVHS: true
        });

        // 
        const movie2 = await Movie.build({ // creating new record using 'build' method (Note: call save() method).
            title: "KF",
            runtime: 50,
            releaseDate: "2020-09-23",
            isAvailableOnVHS: true
        });

        // call save method when build() is used, to save data to database. (or else it will be stored only in memory).
        await movie2.save();

        // Instance of Person class
        const person1 = await Person.create({
            firstName: 'Sweety',
            lastName: 'Punya',
        });

        console.log(person1.toJSON());
        console.log(movie1.toJSON());
        console.log(movie2.toJSON());
        
    } catch (error) {
        if (error.name === "SequelizeValidationError") {
            const errors = error.errors.map(err => err.message);
            console.log("Error: ", errors);
        } else {
            throw error;
        }
    }

})();
