// create the module and name it rreApp
var rreApp = angular.module('rreApp', ['ngRoute', 'snap']);

// configure our routes
rreApp.config(function($routeProvider) {
    $routeProvider

            // route for the home page
            .when('/', {
                templateUrl: 'home.html',
                controller: 'mainController'
            })

            // route for the about page
            .when('/listenagain', {
                templateUrl: 'listenagain.html',
                controller: 'listenagainController'
            })

            // route for the contact page
            .when('/schedule', {
                templateUrl: 'schedule.html',
                controller: 'scheduleController'
            });
});

rreApp.factory('Page', function() {
    var title = 'Live';
    return {
        title: function() {
            return title;
        },
        setTitle: function(newTitle) {
            title = newTitle;
        }
    };
});

// create the controller and inject Angular's $scope
rreApp.controller('mainController', function($scope, Page) {
    // create a message to display in our view
    $scope.Page = Page;
    Page.setTitle('Live');
    $scope.message = 'On Next:Program 2';
    
    $scope.snapOpts = {
      disable: 'right'
    };
    
});

rreApp.controller('listenagainController', function($scope, Page) {
    Page.setTitle('Listen Again');
    $scope.message = 'Listen Again to past shows';
});

rreApp.controller('scheduleController', function($scope, Page) {
    Page.setTitle('Schedule');
    $scope.message = 'See what shows are comming up on Radio Ramadan';
});