const mongoose = require("mongoose");

async function connectdb(){
    await mongoose.connect("mongodb+srv://beramehak0_db_user:beramehak30_db_user@cluster0.pdxq5cj.mongodb.net/halley")
    console.log("connected to db");
}
module.exports = connectdb();