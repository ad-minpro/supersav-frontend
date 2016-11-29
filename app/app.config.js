myapp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/dashboard');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS =======================================
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'dashboard/partials/dashboard2.html'
        })

        .state('dashboard2', {
            url: '/dashboard2',
            templateUrl: 'dashboard/partials/dashboard.html'
        })

        // TICKETS ============================================================
        .state('tickets', {
            url: '/tickets', 
            templateUrl: 'tickets/partials/common.html'
        })
        
        .state('tickets.new', {
            url: '/new',
            templateUrl: 'tickets/partials/new.html'
        })

        .state('tickets.list', {
            url: '/list',
            templateUrl: 'tickets/partials/list.html'
        })

        // CUSTOMERS ==========================================================
        .state('customers', {
            url: '/customers', 
            templateUrl: 'customers/partials/common.html'
        })

        .state('customers.list', {
            url: '/list',
            templateUrl: 'customers/partials/list.html'
        })
        
        .state('customers.new', {
            url: '/new',
            templateUrl: 'customers/partials/new.html'
        })
        
        .state('customers.profile', {
            url: '/profile/:id',
            templateUrl: 'customers/partials/profile.html'
        })

        // CONTACTS ===========================================================
        .state('contacts', {
            url: '/contacts', 
            templateUrl: 'contacts/partials/common.html', 
            controller: 'ContactsCommonCtrl'
        })

        .state('contacts.list', {
            url: '/list',
            templateUrl: 'contacts/partials/list.html'
        })

        // PROCEEDINGS ========================================================
        .state('proceedings', {
            url: '/proceedings', 
            templateUrl: 'proceedings/partials/common.html', 
            controller: 'ProceedingsCommonCtrl'
        })

        .state('proceedings.list', {
            url: '/list',
            templateUrl: 'proceedings/partials/list.html'
        });                  
});