myapp.factory('TicketsService', function($resource) {
  return $resource('data/tickets.json',{ }, {
    query: {method:'GET', isArray: true}, 
    getData: {method:'GET', isArray: false}
  });
});