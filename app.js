const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())

const url="mongodb://localhost:27017"
mongoose.connect(url)
const con = mongoose.connection

if (con.on) {
    try {
        console.log('database connected successfully !!!');
        
    } catch (error) {
        console.log(error);
        
    }
}

const studentsRoute = require('./routes/students')
app.use('/students', studentsRoute)

const port = 3000
app.listen(port,()=>{
    console.log(`Server connected on port ${port}`);
})

