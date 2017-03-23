
const express = require('express')
const router = express.Router()

router.post('/hotels', function(req, res, next) {
console.log(req.body)
})


router.post('/restaurants', function(req, res, next) {

})

router.post('/activities', function(req, res, next) {

})

module.exports = router


