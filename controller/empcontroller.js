const express = require('express');
const router = express.Router();
const {v4 : uuidv4} = require('uuid');
const use = require('../model/emp.model.scema.js');

let emps = [];

router.get('/',(req,res)=>{
    console.log(emps);
    res.send(emps);
});

router.post('/',(req,res)=>{
    const em = new use({
        name: req.body.name,
        city: req.body.city
    })
    em.save();
    // const em = req.body ;


    // emps.push({...em, id: uuidv4()});//em = user   emps = users
    // console.log('Post reached');

    res.send(`user with the name ${em.name} added to the database`)
});

router.get('/:id',async (req, res) => {
    const { id }= req.params;

    const foundEMp = emps.find( (em) => em.id == id);
    res.send(foundEMp);
});

router.delete('/:id',(req,res)=>{
    const { id } = req.params;
    emps = emps.filter((em) => em.id !== id);   
    res.send(`user with the id ${id} deleted from database`);
})

router.patch('/:id',(req,res)=>{
    const { id } = req.params; 
    const { name, city } = req.body;
    
    const em = emps.find((em)=> em.id == id);

    if (name) em.name = name;
    if (city) em.city = city;

    res.send(`emp with id ${id} has been updated`);

    
});    
module.exports = router; 