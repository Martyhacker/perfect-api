const mongoose = require('mongoose');
const Joi = require('joi');

const Work = mongoose.model('Works', new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true
    }
}));
function validateWork(work) {
    const schema = Joi.object(
        {
            name: Joi.string().min(3).required(),
            description: Joi.string().min(5).required(),
            imageUrl: Joi.string().min(5).required()
        });
        return schema.validate(work);
}
exports.Work = Work;
exports.validate = validateWork;