const Hotel = require('../models/hotel');
const Restaurant = require('../models/restaurant');
const Activity = require('../models/activity');
const Day = require('../models/dayModel');
const express = require('express')
const router = express.Router()


router.get('/hotels', function(req, res, next) {
  Hotel.findAll()
  .then(function(hotels) {
    res.json(hotels)
  })
})

router.get('/restaurants', function(req, res, next) {
  Restaurant.findAll()
  .then(function(restaurants) {
    res.json(restaurants)
  })
})

router.get('/activities', function(req, res, next) {
  Activity.findAll()
  .then(function(activities) {
    res.json(activities)
  })
})

router.get('/days', function(req, res, next) {
  Day.findAll()
  .then(function(days) {
    res.json(days)
  })
})

router.get('/createDay', function(req, res, next) {
  Day.create()
  .then(function(newDay) {
    res.json(newDay)
  })
})




router.post('/hotels', function(req, res, next) {
console.log(req.body)
})


router.post('/restaurants', function(req, res, next) {

})

router.post('/activities', function(req, res, next) {

})

module.exports = router
