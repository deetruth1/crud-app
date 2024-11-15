const mongoose = require('mongoose')
const studentSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true 
    },
    class:{
        type: String,
        required: true
    },
    age:{
        type: String,
        required: true
    },
    roll:{
        type: String,
        required: true,
        unique: true
    },
    reg_date:{
        type: Date,
        required: true,
        // default: true
    }
})

module.exports = mongoose.model('student', studentSchema)