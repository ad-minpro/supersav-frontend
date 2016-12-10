'use strict';

var myapp = angular.module('myapp', [
	'ngResource', 
	'ngMaterial',
    'ngAnimate',
	'ngMdIcons',
    'ui.router', 
    'md.data.table', 
    'angularMoment', 
    'angularFileUpload', 
    'flow'
    //'ui.bootstrap'
    //'mdDataTable'
])

myapp.run(function($rootScope) {
    $rootScope.page = {'title': '', 'subtitle': '' };
  });


 

myapp.config(['flowFactoryProvider', function (flowFactoryProvider) {
  flowFactoryProvider.defaults = {
    target: '/uploads',
    permanentErrors: [404, 500, 501],
    maxChunkRetries: 1,
    chunkRetryInterval: 5000,
    simultaneousUploads: 4
  };
  flowFactoryProvider.on('catchAll', function (event) {
    console.log('catchAll', arguments);
  });
}]);

myapp.constant('API_SERVER', 'http://127.0.0.1:8000/api/');
myapp.constant('API', 'http://127.0.0.1:8000');

