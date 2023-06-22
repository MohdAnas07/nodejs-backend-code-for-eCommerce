const express = require('express');
// const mongoose = require('mongoose');
require('dotenv').config(); // config environment variable to use
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 80

const productsRouter = require('./routes/product');
const usersRouter = require('./routes/user');






// Database connection code ====>> local mongoDB-compass -> db connection ======>>
require('./db/config')


// BODY PARSER ===================>>
app.use(express.json());
app.use(cors())
// Router middlewares ================================>>
app.use('/api/products', productsRouter)
app.use('/api/users', usersRouter)



// SERVER =======================================>>
app.listen(PORT, () => {
    console.log(`Server started, running on PORT ${PORT}`)
})


