const mongoose = require('mongoose');

const db = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/MTH")
        console.log("connected");
    } catch (error) {
        console.log(error)
    }
}

module.exports = db