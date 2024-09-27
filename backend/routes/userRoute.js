const express = require('express');
const router = express.Router(); 
const User = require('../models/userModel');


router.post('/', async (req, res) => {
    const {name, email, age} = req.body;
    
    try{
        const userAdded = await User.create({
            name: name,
            email: email,
            age: age
        });

        res.status(201).send(userAdded);
    }catch(error){
        res.status(400).json({error: error.message});
    } 
})

router.get('/', async (req, res) => {
    try{
        const findAll = await User.find();
        res.status(201).send(findAll);
    }catch(error){
        res.status(401).json({error: error.message});
    }
});

router.get('/:id', async (req, res) => {
    try{
        const { id } = req.params;
        const singleUser = await User.findById({_id: id});
        res.status(200).send(singleUser);
    }catch(error){
        res.status(401).json({error: error.message});
    } 
});

router.delete('/:id', async (req, res) => {
    try{
        const { id } = req.params;
        const deleteUser = await User.findByIdAndDelete({_id: id});
        res.status(200).send(deleteUser);
    }catch(error){
        res.status(401).json({error: error.message});
    }
});

router.patch('/:id', async (req, res) => {
    try{
        const { id } = req.params;
        const deleteUser = await User.findByIdAndUpdate( id, req.body, {new: true});
        res.status(200).send(deleteUser);
    }catch(error){
        res.status(401).json({error: error.message});
    }
});

module.exports = router;