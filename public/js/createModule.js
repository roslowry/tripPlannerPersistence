var createModules = (function () {

  var publicAPI = {
    dayCreatePromise: $.ajax({
      method: 'GET',
      url: '/api/createDay'
    }),

  }
  return publicAPI
}());
