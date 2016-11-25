myapp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/dashboard');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'dashboard/partials/dashboard2.html'
        })

        .state('dashboard2', {
            url: '/dashboard2',
            templateUrl: 'dashboard/partials/dashboard2.html'
        })
       
        .state('test', {
            url: '/test',
            templateUrl: 'common/partials/test.html'
        })

        // TICKETS =============================================================
        .state('tickets', {
            url: '/tickets', 
            templateUrl: 'tickets/partials/common.html'
        })
        
        .state('tickets.new', {
            url: '/new',
            templateUrl: 'tickets/partials/new.html'
        })

        .state('tickets.currents', {
            url: '/currents',
            templateUrl: 'tickets/partials/currents.html'
        })
        
        .state('tickets.search', {
            url: '/search',
            templateUrl: 'tickets/partials/search.html'
        })

        // CUSTOMERS ==========================================================
        .state('customers', {
            url: '/customers', 
            templateUrl: 'customers/partials/common.html'
        })

        .state('customers.main', {
            url: '/main',
            templateUrl: 'customers/partials/main.html', 
            controller: 'CustomersCommonCtrl'
        })
        
        .state('customers.new', {
            url: '/new',
            templateUrl: 'customers/partials/new.html'
        })
        
        .state('customers.profile', {
            url: '/profile/:id',
            templateUrl: 'customers/partials/profile.html'
        });                  
});