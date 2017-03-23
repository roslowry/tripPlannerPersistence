const Sequelize = require('sequelize');
const db = require('./_db');
const Place = require('./place');
const Hotel = require('./hotel');
const Restaurant = require('./restaurant')
const Activity = require('./activity')

const Day = db.define('day', {
    dayNum: {type: Sequelize.INTEGER,
            set: function() {
              dayLength = Day.dayCount()+1
              this.setDataValue('dayNum', dayLength)
            }
    }
  },
  {
    getterMethods: {
      type: function () {
        return 'day'
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
