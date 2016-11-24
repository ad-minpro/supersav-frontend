
myapp.controller('CustomersCommonCtrl', function($scope, $rootScope, CustomersService){
    $rootScope.page.title = 'Clients';
    
/*
	$scope.dataItems = [
		{
			id: 1,
			fullname : 'Aurelien ROY',
			town: 'chabeuil',
			phone_1: '0652460176', 
			phone_2: '', 
			professional: true, 
			corporate_name: 'AD-Min.pro', 
			updated: '01/06/2016', 
		},
		{
			id: 2,
			fullname : 'Aurelien ROY',
			town: 'chabeuil',
			phone_1: '0652460176', 
			phone_2: '', 
			professional: false, 
			corporate_name: '', 
			updated: '01/06/2016', 
		},
		{
			id: 3,
			fullname : 'Aurelien ROY',
			town: 'chabeuil',
			phone_1: '0652460176', 
			phone_2: '', 
			professional: true, 
			corporate_name: '', 
			updated: '01/06/2016', 
		},
		{
			id: 4,
			fullname : 'Aurelien ROY',
			town: 'chabeuil',
			phone_1: '0652460176', 
			phone_2: '', 
			professional: false, 
			corporate_name: '', 
			updated: '01/06/2016', 
		},
		{
			id: 6,
			fullname : 'Aurelien ROY',
			town: 'chabeuil',
			phone_1: '0652460176', 
			phone_2: '', 
			professional: false, 
			corporate_name: '', 
			updated: '01/06/2016', 
		},						
	];
*/
	CustomersService.getData(function(data){
		$scope.dataItems = data.results;
		console.log(data.results);
	});

	
	


});


myapp.controller('CustomersProfileCtrl', function($scope, $rootScope, $stateParams, CustomersService){
	var id = $stateParams.id;

	//$scope.customer = CustomersService.get({id: 31});
	CustomersService.getData(function(data){
		
		for (var i = 0; i < data.results.length; i++) {
			if (data.results[i].id == id) {
				$scope.data = data.results[i];
				console.log(result.id);

				if (data.results[i].professional) {
					$rootScope.page.title = 'Clients > '+data.results[i].corporate_name;
				} else {
					$rootScope.page.title = 'Clients > '+data.results[i].fullname;	
				}				
			}
		}
	});	


	
/*
	$scope.data = {
        id: 16,
        fullname: "alia jaroussie",
        firstname: "alia",
        lastname: "jaroussie",
        corporate_name: "Missalia SARL Industries & Cie",
        professional: true,
        email: "aliajrs@gmail.com",
        phone_1: "0602030405",
        phone_2: "0475010203",
        address: "1 rue de la veore",
        zipcode: "26120",
        town: "chabeuil",
        country: "france",
        send_sms: true,
        send_email: true,
        added: "2016-04-13T20:18:36.551994Z",
        updated: "2016-04-13T20:18:36.556976Z"
	};
	$rootScope.page.title = 'Clients > '+$scope.data.fullname;
*/

});