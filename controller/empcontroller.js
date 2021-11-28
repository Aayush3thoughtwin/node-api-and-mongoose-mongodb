const express = require('express');
const router = express.Router();
// const {v4 : uuidv4} = require('uuid');
const use = require('../model/emp.model.scema.js');

// let emps = [];

router.get('/',async(req,res)=>{
    try{
        const uses = await use.find();
        res.json(uses);
    }
    catch (err){
        res.json({message:err});
    }
    // console.log(emps);
    // res.send(emps);
});

router.post('/',async(req,res)=>{
    const em = new use({
        name: req.body.name,
        city: req.body.city
    })
    // em.save();
    // const em = req.body ;
    try{
        const posts = await em.save();
        res.json(posts);
    
        }
    catch(err){
        res.json({message:err});
    }

    // emps.push({...em, id: uuidv4()});//em = user   emps = users
    // console.log('Post reached');

    // res.send(`user with the name ${em.name} added to the database`)
});

router.get('/:id',async (req, res) => {
    try{
    // const { _id }= req.params;

        const foundEMp = await use.findById( req.params.id);
        res.json(foundEMp);
    }
    catch(err){
        res.json({message: err});
    }
});



router.delete('/:id',async(req,res)=>{
    try{ 
        const removeemp = await use.deleteMany({_id:req.params.id});
        res.json(removeemp);
    }catch{
        res.json({message: err});

    }
    // const { _id } = req.params;
    // emps = emps.filter((em) => em.id !== id);   
    // res.send(`user with the id ${id} deleted from database`);
})

router.patch('/:id',async(req,res)=>{
    try{
        const updated_emp = await use.updateMany(
            { _id: req.params.id },
            { $set: {name: req.body.name, city: req.body.city }},
            // { $set: {}}

        );
        res.json(updated_emp);
        }catch(err){
            res.json({ message:err });
        }
    });
    // const { id } = req.params; 
    // const { name, city } = req.body;
    
    // const em = emps.find((em)=> em.id == id);

    // if (name) em.name = name;
    // if (city) em.city = city;

    // res.send(`emp with id ${id} has been updated`);

    
// });    
module.exports = router; 