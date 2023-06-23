// const mongoose = require('mongoose');
const express = require('express');
require('dotenv').config(); // config environment variable to use
const jwt = require('jsonwebtoken');

const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 80


const productsRouter = require('./routes/product');
const usersRouter = require('./routes/user');
const authRouter = require('./routes/auth');



// Database connection code ====>> local mongoDB-compass -> db connection ======>>
require('./db/config')



// =========================== JWT Verification ======================>>

const auth = (req, res, next) => {
    try {
        const token = req.get('authorization').split('Bearer ')[1];
        console.log(token);
        var decoded = jwt.verify(token, process.env.SECRET_KEY);
        console.log(decoded);
        if (decoded.email) {
            next()
        } else {
            res.sendStatus(401);
        }
    } catch (error) {
        res.status(401).json(error)
    }
}


// =========================== MIDDLEWARES ====================================>>

// BODY PARSER ====>>
app.use(express.json());
app.use(cors())

// Router middlewares =======>>
app.use('/api/auth', authRouter)
app.use('/api/products', auth, productsRouter)
app.use('/api/users', auth, usersRouter)




// ============================== SERVER =====================================>>
app.listen(PORT, () => {
    console.log(`Server started, running on PORT ${PORT}`)
})


