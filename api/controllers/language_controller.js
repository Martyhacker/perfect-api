const mongoose = require('mongoose');
const {Language, validate} = require('../models/language');

exports.langs_get_all = async (req, res)=>{
    const languages = await Language.find().sort('name');
    res.send(languages);
};
exports.lang_by_id = async (req,res)=>{
    const language = await Language.findById(req.params.id);

    if(!language) return res.status(404).send('The cat with given ID not found!');

    res.send(language);
};

exports.post_lang = async (req,res)=>{
    const {error} = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    
    let language = new Language({
        name: req.body.name,
        imageUrl: req.body.imageUrl,
    });

    language = await language.save();
    res.send(language);
};

exports.put_lang = async (req, res)=>{
    const {error} = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    const language = await Language.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        imageUrl: req.body.imageUrl
    }, {new: true});

    if(!language) return res.status(404).send('The project with given ID not found!');
    res.send(language);
};

exports.delete_lang = async (req, res)=>{
    const language = await Language.findByIdAndRemove(req.params.id);

    if(!language) return res.status(404).send('The project with given ID not found!');
    res.send(language);
};