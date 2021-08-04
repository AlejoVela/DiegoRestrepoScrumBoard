const mongoose = require("mongoose");

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log("Connectio with mongo is OK");
    } catch (error) {
        console.log("Failed to connect with mongo, error: " + error);
    }
};


module.exports = { dbConnection };