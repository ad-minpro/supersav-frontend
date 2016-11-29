myapp.controller('TicketsCommonCtrl', function($scope, $rootScope, TicketsService){
    $rootScope.page.title = 'Tickets';
    
	TicketsService.getData(function(data){
		$scope.dataItems = data.results;
		console.log(data.results);
	});

	$scope.query = {
		order: 'reference',
		limit: 5,
		page: 1
	};

	$scope.logOrder = function (order) {
		console.log('order: ', order);
	};

});