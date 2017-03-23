const Sequelize = require('sequelize');
const db = require('./_db');
const Place = require('./place');
const Hotel = require('./hotel');
const Restaurant = require('./restaurant')
const Activity = require('./activity')

const Day = db.define('day', {
    number: {type: Sequelize.INTEGER,
    }
  },
  {
    getterMethods: {
      type: function () {
        return 'day'
      }
    },
    hooks: {
      beforeValidate: function (day) {
        Day.dayCount()
        .then(function(length) {
          console.log(length+1)
          day.dayNum = length+1
        })
      }
    },
    classMethods: {
      dayCount: function () {
        return this.findAll()
        .then(function(allDays) {
          return allDays.length
        })
      }
    }
  }
);

const RestaurantDay = db.define('restaurant_day', {
  role: Sequelize.STRING
});
const ActivityDay = db.define('activity_project', {
  role: Sequelize.STRING
});





Day.belongsTo(Hotel)
Day.belongsToMany(Restaurant, {through: RestaurantDay})
Restaurant.belongsToMany(Day, {through: RestaurantDay})
Day.belongsToMany(Activity, {through: ActivityDay})
Activity.belongsToMany(Day, {through: ActivityDay})


module.exports = Day
