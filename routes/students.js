const express = require('express')
const router = express.Router()
const student = require('../model/students')
const students = require('../model/students')

router.get('/', async (req,res)=>{
    const students = await student.find()
    res.status(200).json(students)
    
})

router.get('/:id', async (req,res)=>{
    const students = await student.findById(req.params.id)
    res.status(200).json(students)
    
})

router.post('/', async (req,res)=>{
    const students = new student({
        name: req.body.name,
        class: req.body.class,
        age: req.body.age,
        roll: req.body.roll,
        reg_date: req.body.reg_date
    })

    try {
        const a1 = await students.save()
        res.status(200).json(a1)
    } catch (error) {
        res.status(401).send(error)
    }
})

router.patch('/:id', async (req,res)=>{
    try {
        const students = await student.findById(req.params.id)
        students.age = req.body.age
        // console.log(students.age);
        const a1 = await students.save()
        
        res.json(a1)
    } catch (error) {
        res.status(401).send(error)
    }
})
router.delete('/:id', async (req,res)=>{
    try {
        const students = await student.findByIdAndDelete(req.params.id)
        students.id = req.params.id
        students.deleteOne()
        res.status(200).json({message: "student has been deleted successfully"})
    } catch (error) {
        res.status(401).send(error)
    }
})

module.exports = router 