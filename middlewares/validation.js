const { userSchema, userUpdateSchema } = require('../validators/user');

const validate = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};

const validateUserCreation = validate(userSchema);
const validateUserUpdate = validate(userUpdateSchema);

module.exports = {
    validateUserCreation,
    validateUserUpdate
};
