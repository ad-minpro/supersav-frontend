
myapp.controller('CustomersCommonCtrl', function($scope, $rootScope, CustomersService){
    $rootScope.page.title = 'Clients';
    
	CustomersService.getData(function(data){
		$scope.dataItems = data.results;
		console.log(data.results);
	});

	$scope.query = {
		order: 'fullname',
		limit: 5,
		page: 1
	};

	$scope.logOrder = function (order) {
		console.log('order: ', order);
	};

});

myapp.controller('CustomersProfileCtrl', function($scope, $rootScope, $stateParams, CustomersService){
	var id = $stateParams.id;
	$rootScope.page.title = 'Clients...';

	//$scope.customer = CustomersService.get({id: 31});
	CustomersService.getData(function(data){
		for (var i = 0; i < data.results.length; i++) {
			if (data.results[i].id == id) {
				$scope.data = data.results[i];

				if (data.results[i].professional) {
					$rootScope.page.title = 'Clients > '+data.results[i].corporate_name;
				} else {
					$rootScope.page.title = 'Clients > '+data.results[i].fullname;	
				}				
			}
		}
	});	

});

myapp.controller('NewCustomerCtrl', function($scope, $rootScope, CustomersService){
    $rootScope.page.title = 'Nouveau client';
});

