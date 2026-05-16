const mongoose = require('mongoose');
const dns = require('dns');
require('dotenv').config();

// Use Google's public DNS to bypass ISP DNS issues
dns.setServers(['8.8.8.8', '8.8.4.4']);

exports.connectDB = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        maxPoolSize: 10,
        serverSelectionTimeoutMS: 10000,
        socketTimeoutMS: 45000,
        family: 4
    })
        .then(() => {
            console.log('Database connected succcessfully');
        })
        .catch(error => {
            console.log(`Error while connecting server with Database`);
            console.log(error);
            process.exit(1);
        })
};

