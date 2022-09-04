const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose
    .connect(url)
    .then(() => console.log("💽 [DATABASE] Connected to MongoDB!"))
    .catch((error) =>
      console.log(`Error connecting to MongoDB!, because ${error}`)
    );
};

module.exports = connectDB;
