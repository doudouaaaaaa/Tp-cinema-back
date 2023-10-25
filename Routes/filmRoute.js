const filmController = require('../Controllers/filmController.js')
const router = require('express').Router()

// get
router.get('/getfilms', filmController.getfilms)

// post
router.post('/addfilms', filmController.addfilms)

//delete
router.delete('/films/:id', filmController.deletefilms)

module.exports = router;