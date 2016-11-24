'use strict';

var myapp = angular.module('myapp', [
	'ngResource', 
	'ngMaterial',
	'ngMdIcons',
    'ui.router', 
    'md.data.table', 
    //'ui.bootstrap'
    //'mdDataTable'
])

myapp.run(function($rootScope) {
    $rootScope.page = {'title': 'n/c', 'subtitle': '' };
  });


 




myapp.constant('API_SERVER', 'http://127.0.0.1:8000/api/');
myapp.constant('API', 'http://127.0.0.1:8000');

