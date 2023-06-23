const model = require('../model/user');
const User = model.User;



// Get all products
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        if (users) {
            res.status(200).json(users)
        } else {
            res.status(400).json('no user found')
        }
    } catch (error) {
        res.status(400).json(error)
    }
}

// GET Single Product
exports.getUser = async (req, res) => {
    const id = req.params.id
    try {
        const user = await User.findById(id);
        if (user) {
            res.status(200).json(user)
        } else {
            res.status(400).json('No user Found')
        }
    } catch (error) {
        res.status(400).json(error)
    }
}


// Create a Product
exports.createUser = async (req, res) => {
    const newUser = new User(req.body)
    try {
        const savedUser = await newUser.save()
        res.status(200).json(savedUser);
    } catch (error) {
        res.status(400).json(error)
    }
}

// Update a Product
exports.updateUser = async (req, res) => {
    const id = req.params.id
    try {
        const doc = await User.findOneAndUpdate({ _id: id }, req.body, { new: true });
        res.status(200).json(doc);
    } catch (error) {
        res.status(400).json(error)
    }
}

// Delete a Product
exports.deleteUser = async (req, res) => {
    const id = req.params.id
    try {
        const doc = await User.findOneAndDelete({ _id: id });
        res.status(200).json(doc);
    } catch (error) {
        res.status(400).json(error)
    }
}   
