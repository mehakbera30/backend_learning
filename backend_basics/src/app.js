// // yeh create to start krta hai
// const express = require("express");
// const app = express();

// app.use(express.json())

// const notes = []
// app.post('/notes',(req,res) =>{
//     console.log(req.body);
//     notes.push(req.body)
    
//     res.status(201).json({
//         message:"note created successfully",
//         notes:notes
//     })
// })

// app.get('/notes' , (req,res)=>{
//     res.status(200).json({
//         message:"notes fetched successfully",
//         notes:notes
//     })
// })

// app.delete('/notes/:index',(req,res) =>{
//     const index = req.params.index
//     delete notes[index] 
//     res.status(200).json({
//         message: "note deleted successfully"
//     })
// })

// app.patch('/notes/:index', (req,res) =>{
//     const index = req.params.index
//     const description = req.body.description
//     notes[index].description = description

//     res.status(200).json({
//         messgae:"the note is updated"
//     })

// })
// // : colon ke baad joh bhi value hogi woh dyanmic hogi and its is called params
// module.exports = app;


// mongodb connection///////////////////

const express = require('express');
const app = express();
const noteModel = require('./models/note.model')

app.use(express.json())

app.post("/notes" , async(req,res)=>{
    const data = req.body;
    await noteModel.create({
        title: data.title,
        description: data.description,
    })
    res.status(201).json({
        message:"server created"
    })
})

// const notes = await noteModel.findOne({
    //     title:"test_title8"
// it gives the vlaue of the particular title or part that we specify and if it is not present
// it will give a null value or empty array// but find() will give us the array of the whole element that we are create over the time
    // })
app.get("/notes",async(req,res)=>{
    const notes = await noteModel.find() // return value in form of array[]
    res.status(200).json({
        message:"notes is successfullt fetched",
        notes:notes
    })
})

app.delete("/notes/:id",async(req,res)=>{
    const id = req.params.id;
    await noteModel.findByIdAndDelete({
        _id: id
    })
    res.status(200).json({
        message:"note deleted successfully"
    })
})

 app.patch("/notes/:id",async(req,res)=>{
    const id = req.params.id;
    const description = req.body.description;
    await noteModel.findByIdAndUpdate({_id:id},{description:description})
        
    res.status(200).json({
        message:"note updated successfully"
    })
})


module.exports = app;


