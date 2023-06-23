const jwt = require('jsonwebtoken');
const model = require('../model/user');
const User = model.User;


// Create a Product
exports.createUser = async (req, res) => {
    const newUser = new User(req.body)

    const token = jwt.sign({ email: req.body.email }, process.env.SECRET_KEY);
    newUser.token = token;

    try {
        const savedUser = await newUser.save()
        res.status(200).json(savedUser);
    } catch (error) {
        res.status(400).json(error)
    }
}