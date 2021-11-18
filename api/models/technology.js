const mongoose = require('mongoose');
const Joi = require('joi');

const Technology = mongoose.model('Technology', new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true
    }
}));
function validateTechnology(technology) {
    const schema = Joi.object(
        {
            name: Joi.string().min(3).required(),
            imageUrl: Joi.string().min(5).required()
        });
        return schema.validate(technology);
}
exports.Technology = Technology;
exports.validate = validateTechnology;