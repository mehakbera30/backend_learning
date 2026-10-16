const mongoose = require('mongoose');

const postSchema = new mongoose.schema({
    image : String,
    caption : String
})

const postmodel = mongoose.model("post",postSchema);
module.exports = postmodel; 


// Schema = Form ka design
// Image field, caption field

// Model = Form par kaam karne ka tool
// Save, search, update, delete

// MongoDB = Record room
// Jahan actual data store hota hai

// mongoose.model() — creates a model using the schema you provide.
// "post" — the model name. Mongoose normally converts it to the plural, lowercase collection name posts in MongoDB.
// postSchema — tells Mongoose what structure the posts should follow.
// postModel — the variable that lets you use this model in your server code.

// matlab db bnya post joh postschema ka structure follow karega and iski hep se mein data koh udate,fetch, delete kr skti with apis?