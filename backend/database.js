const mongoose = require('mongoose');

function DBConnect() {
    const DB_URL = process.env.DB_URL;

    mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log('connection successfull');
    }).catch((err) => {
        console.log('connection failed');
    })

}

module.exports = DBConnect;