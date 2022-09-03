// imports
require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express()
const port = process.env.PORT

// middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('uploads'))

app.use('/api/users', require('./routes/userRoutes'))

app.listen(port, () => console.log('Server listening on port', port, '...'))