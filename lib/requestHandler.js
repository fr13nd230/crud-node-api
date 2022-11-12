const requestHandler = (req, res, next) => {
    console.log(`${req.method} - ${req.path} - ${req.status} @ ${req.ip}`)
    next()
}

module.exports = {
    requestHandler
}