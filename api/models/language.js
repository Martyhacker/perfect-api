const mongoose = require('mongoose');
const Joi = require('joi');

const Language = mongoose.model('Languages', new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true
    }
}));
function validateLanguage(language) {
    const schema = Joi.object(
        {
            name: Joi.string().min(3).required(),
            imageUrl: Joi.string().min(5).required()
        });
        return schema.validate(language);
}
exports.Language = Language;
exports.validate = validateLanguage;