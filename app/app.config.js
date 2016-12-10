myapp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/dashboard');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS =======================================
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'dashboard/partials/dashboard.html'
        })

        .state('dashboard-old', {
            url: '/dashboard-old',
            templateUrl: 'dashboard/partials/dashboard_old.html'
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

        .state('tickets.new2', {
            url: '/new2',
            templateUrl: 'tickets/partials/new2.html'
        })

        .state('tickets.list', {
            url: '/list',
            templateUrl: 'tickets/partials/list.html'
        })

        .state('tickets.ticket', {
            url: '/ticket',
            templateUrl: 'tickets/partials/ticket2.html'
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