const Joi = require('joi');

const userSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    role: Joi.string().valid('admin', 'employee', 'standard user').required()
});

const userUpdateSchema = Joi.object({
    email: Joi.string().email(),
    password: Joi.string().min(6),
    role: Joi.string().valid('admin', 'employee', 'standard user')
}).min(1); // At least one of the fields must be provided for update

module.exports = {
    userSchema,
    userUpdateSchema
};
