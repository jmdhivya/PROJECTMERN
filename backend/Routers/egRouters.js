const express = require('express');
const router = express.Router();
const { getRoute, postRoute, putRoute, deleteRoute,getRouteById } = require('../controller/egController');



router.get('/get', getRoute)
router.get('/get/:id', getRouteById)
router.post('/post', postRoute)
router.put('/put/:id', putRoute)
router.delete('/delete/:id', deleteRoute)

module.exports = router;