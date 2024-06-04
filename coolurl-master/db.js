require("dotenv").config();
const mongoose = require("mongoose");

// MpyUSTd0oOTuwwIp

const connectDB = async() => {
    // Connect to MongoDB using Mongoose
   await mongoose.connect("mongodb://localhost:27017/urlshortener")
    .then(()=>{console.log("Successfully connected to MongoDB")})
    .catch((err)=>{console.log(`Failed to connect to MongoDB: ${err}`)})
}

module.exports = {connectDB};

