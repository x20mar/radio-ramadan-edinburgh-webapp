// create the module and name it rreApp
var rreApp = angular.module('rreApp', ['ngRoute', 'snap', 'ui.calendar', 'ui.bootstrap', 'mediaPlayer']);

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
    var title = RRE.language.title.LIVE;
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
    Page.setTitle(RRE.language.title.LIVE);
    $scope.message = 'On Next:Program 2';

    $scope.snapOpts = {
        disable: 'right'
    };

    $scope.audioPlaylist = [];
    $scope.audioPlaylist.push({
        src: RRE.config.AUDIO_SRC,
        type: RRE.config.AUDIO_FORMAT
    });
});

rreApp.controller('listenagainController', function($scope, Page) {
    Page.setTitle(RRE.language.title.LISTEN_AGAIN);
    $scope.message = 'Listen Again to past shows';
});

rreApp.controller('scheduleController', function($scope, Page) {
    Page.setTitle(RRE.language.title.SCHEDULE);

    $scope.eventSource = {
        url: RRE.config.CAL_SRC,
        className: 'gcal-event', // an option!
        currentTimezone: RRE.config.CAL_TIMEZONE // an option!
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