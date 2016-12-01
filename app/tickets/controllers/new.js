
myapp.controller('NewTicketCtrl', function($scope, $rootScope, TicketsService){
    $rootScope.page.title = 'Nouveau ticket';

    $scope.readonly = false;
    $scope.removable = false;

    // Lists of fruit names and Vegetable objects
    $scope.fruitNames = ['MG5650'];

  $scope.brands = [
      "canon", 
      "brother", 
      "hp", 
      "epson", 
      "samsung"
  ];

  $scope.sizes = [
      "informatique"
  ];
  $scope.toppings = [
    { category: 'imprimante et multifonction', name: 'imprimante thermique' },
    { category: 'imprimante et multifonction', name: 'imprimante sublimation' },
    { category: 'imprimante et multifonction', name: 'multifonction laser' },
    { category: 'imprimante et multifonction', name: 'imprimante laser' },
    { category: 'high tech', name: 'pc portable' },
    { category: 'high tech', name: 'smartphone et tablette' }
  ];

});