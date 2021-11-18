const mongoose = require('mongoose');
const {Technology, validate} = require('../models/technology');

exports.tech_get_all = async (req, res)=>{
    const technologies = await Technology.find().sort('name');
    res.send(technologies);
};
exports.tech_by_id = async (req,res)=>{
    const technology = await Technology.findById(req.params.id);

    if(!technology) return res.status(404).send('The cat with given ID not found!');

    res.send(technology);
};

exports.post_tech = async (req,res)=>{
    const {error} = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    
    let technology = new Technology({
        name: req.body.name,
        imageUrl: req.body.imageUrl,
    });

    technology = await technology.save();
    res.send(technology);
};

exports.put_tech = async (req, res)=>{
    const {error} = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    const technology = await Technology.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        imageUrl: req.body.imageUrl
    }, {new: true});

    if(!technology) return res.status(404).send('The project with given ID not found!');
    res.send(technology);
};

exports.delete_tech = async (req, res)=>{
    const technology = await Technology.findByIdAndRemove(req.params.id);

    if(!technology) return res.status(404).send('The project with given ID not found!');
    res.send(technology);
};