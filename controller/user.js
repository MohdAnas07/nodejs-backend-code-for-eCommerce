const data = require('../data.json')
const { users } = data;
// console.log(users);


// Get all users
exports.getUsers = (req, res) => {
    res.status(200).json(users)
}

// GET Single user
exports.getUser = (req, res) => {
    const id = +req.params.id
    console.log(id);
    const user = users.find(p => p.id === id)
    res.status(200).json(user)
}

// Create a user
exports.createUser = (req, res) => {
    const newUser = req.body
    const user = users.find(p => p.id === newUser.id)

    if (user) {
        res.status(201).json('users already exist!')
    } else {
        users.push(newUser)
        res.status(200).json('new user added')
    }
}

// Update a user
exports.updateUser = (req, res) => {
    const id = +req.params.id
    // const updateData = req.body;
    const userIndex = users.findIndex(p => p.id === id)
    const user = users[userIndex];
    users.splice(userIndex, 1, { ...user, ...req.body })
    res.status(200).json('user updated successfuly!')
}

// Delete a user
exports.deleteUser = (req, res) => {
    const id = +req.params.id
    console.log(id);
    const userIndex = users.findIndex(p => p.id === id)
    const user = users[userIndex];
    users.splice(userIndex, 1)
    res.status(200).json(user)
}   
