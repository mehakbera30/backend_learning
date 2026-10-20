const express = require('express');
const multer = require('multer');
const uploadfile = require('./services/storage.service');
const postmodel = require('./models/post.model');
const cors = require('cors');


const app = express();
app.use(cors())  /// use as the middleware to allow cross-origin requests or to communicate between the backend and frontend becoz the frontend and backend are running on different ports.
app.use(express.json());

const upload = multer({storage: multer.memoryStorage()}) // memoryStorage() is used to store the file in memory instead of disk
app.post('/create-post',upload.single('image'),async (req,res) => {

    const result = await uploadfile(req.file.buffer);
    
    const post = await postmodel.create({
        image : result.url,
        caption : req.body.caption
    });

    return res.status(200).json({
        message : "Post created successfully",
        data : post
    })
})

app.get('/posts',async(req,res) => {
     const posts = await postmodel.find();
     
      return res.status(200).json({
        message:"post fetched successfully",
        posts
      })
})

module.exports = app;