// create the module and name it rreApp
var rreApp = angular.module('rreApp', ['ngRoute', 'snap', 'ui.calendar', 'ui.bootstrap']);

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

    $scope.eventSource = {
        url: "http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic",
        className: 'gcal-event', // an option!
        currentTimezone: 'America/Chicago' // an option!
    };
    /* event source that contains custom events on the scope */
    $scope.events = [];
    /* event source that calls a function on every view switch */
    $scope.eventsF = function(start, end, callback) {
        var events = [];
        callback(events);
    };

    /* config object */
    $scope.uiConfig = {
        calendar: {
            editable: true,
            defaultView: 'agendaDay',
            header: {
                left: 'title',
                center: '',
                right: 'today prev,next'
            }
        }
    };
    /* event sources array*/
    $scope.eventSources = [$scope.events, $scope.eventSource, $scope.eventsF];
    $scope.message = 'See what shows are comming up on Radio Ramadan';
});