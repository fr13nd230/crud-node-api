// Built-in requirements
    const express = require('express')
    const dotenv = require('dotenv')

// My own handlers
    const { requestHandler } = require('./lib/requestHandler')
    const { handleError } = require('./lib/errorHandler')
    const Connect = require('./lib/dbHandler')

// Configuration
    dotenv.config()

// Start app
    const app = express()

// Environement variables management
    const port = process.env.PORT || 8080

// Mounting own middlewares
    app.use(requestHandler)
    app.use(handleError)

// Database connection
Connect()

// Mounting middlewares
    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))

// Mounting routes
    app.use('/api', require('./routes/main'))

// Main routing
    app.get('/', (req, res) => {
        res.status(200).json({
            message: "Hello world!",
        })
    })

// Server Listening
    app.listen(port, console.log(`Running port: ${port}`))