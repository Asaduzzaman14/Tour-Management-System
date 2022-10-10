const express = require('express');
const app = express();
const cors = require('cors');

// middleware
app.use(express.json());
app.use(cors())


const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const collors = require('colors');


const port = process.env.local || 5000;


//database connecton
mongoose.connect(process.env.DATABASE).then(() => {
    console.log("Database is connection is Succesfull".green.bold)
})



// routes
const tourRoutes = require('./routes/tourRoutes');



app.get("/", (req, res) => {
    res.send("Tour Rouret is warking!")
})

// get data 
app.use("/tours", tourRoutes)


app.listen(port, () => {
    console.log(`tour app is runing on ${port}`.red.bold);
})