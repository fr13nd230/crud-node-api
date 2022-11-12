const router = require('express').Router()
const { getShow , getShowOne, getCreate, getUpdate, getDelete } = require('../lib/routesHandlers')

/*
    - Request method: GET
    - Access: PRIVATE
    - Path: api/  
*/
    router.get('/', getShow)


/*
    - Request method: GET
    - Access: PRIVATE
    - Path: api/id  
*/
    router.get('/:id', getShowOne)


/*
    - Request method: POST
    - Access: PRIVATE
    - Path: api/create  
*/
    router.post('/create', getCreate)


/*
    - Request method: PUT/POST
    - Access: PRIVATE
    - Path: api/update/id  
*/
    router.put('/update/:id', getUpdate)


/*
    - Request method: DELETE
    - Access: PRIVATE
    - Path: api/delete  
*/
    router.get('/delete/:id', getDelete)

module.exports = router