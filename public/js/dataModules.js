var dataModules = (function () {
  var publicAPI = {
    hotelPromise: $.ajax({
      method: 'GET',
      url: '/api/hotels'
    }),

    restaurantPromise: $.ajax({
      method: 'GET',
      url: '/api/restaurants'
    }),

    activityPromise: $.ajax({
      method: 'GET',
      url: '/api/activities'
    }),

    dayPromise: $.ajax({
      method: 'GET',
      url: '/api/days'
    }),

  }
  return publicAPI
}());
