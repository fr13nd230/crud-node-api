const handleError = (req, res, next) => {
    const Code = res.stausCode
    console.log(Code)
    next()
}

module.exports = {
    handleError,
}