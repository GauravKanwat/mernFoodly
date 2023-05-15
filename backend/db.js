const mongoose = require('mongoose');
const express = require("express");
const app = express();
const mongoURI = "mongodb+srv://gauravkanwat99:Abcd1234@foodly.njjoa4i.mongodb.net/foodly"
const mongoDB = async() => {
    try{
        mongoose.set('strictQuery',false)
        await mongoose.connect(mongoURI)
        console.log('Mongo connected')
        const fetched_data = mongoose.connection.db.collection("food_items");
        console.log("Data fetched");
        const data = await fetched_data.find({}, {projection:{}}).toArray();
        // console.log(data);
    } catch(err) {
        console.log("---", err)
        process.exit();
    }
}
module.exports = mongoDB;