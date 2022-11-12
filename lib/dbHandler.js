const mongoose = require('mongoose')

const Connect = () => {
    const uri = process.env.URI
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }

    try {

        const con = mongoose.connect(uri, options)
                        .then(console.log(`Connected to DB ...`))

    } catch (e) {

        console.error(e.message)
        
    }

}

module.exports = Connect