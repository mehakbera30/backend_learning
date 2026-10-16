// const mongoose = require('mongoose');

// const noteSchema = new mongoose.Schema({
//      title:String,
//      description:String,
// })
 
// const noteModel = mongoose.model("note", noteSchema)
// module.exports = noteModel

const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
     image:String,
     caption: String,
})

const postModel = mongoose.model("post",postSchema);
module.exports = postModel 