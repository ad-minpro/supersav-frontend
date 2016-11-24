myapp.factory('CustomersService', function($resource) {
  return $resource('customers.json',{ }, {
    query: {method:'GET', isArray: true}, 
    getData: {method:'GET', isArray: false}
  });
});