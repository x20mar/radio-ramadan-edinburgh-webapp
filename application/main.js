var rreConfig = {
    AUDIO_SRC: "http://danosongs.com/music/danosongs.com-orb-of-envisage.mp3",
    AUDIO_FORMAT: "audio/mp3",
    CAL_SRC: "http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic",
    CAL_TIMEZONE: "America/Chicago",
    SOUNDCLOUD_SET: "http://soundcloud.com/jxnblk/sets/magic-summer",
    FACEBOOK_URL: "https://www.facebook.com/radioramadan.edinburgh"
};

var rreLang = {
    title: {MENU: "Menu",
        LIVE: "Live",
        LISTEN_AGAIN: "Listen Again",
        SCHEDULE: "Schedule",
        FACEBOOK: "Facebook"},
    message: {ON_NOW: "On Now",
        ON_NEXT: "On Next",
        LISTEN_AGAIN_TO_PAST_SHOWS: "Listen Again to past shows",
        COMING_UP: "See what shows are coming up on Radio Ramadan"}
};

// create the module and name it rreApp
var rreApp = angular.module('rreApp', ['ngRoute', 'snap', 'ui.calendar', 'ui.bootstrap', 'mediaPlayer', 'plangular']);

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
    var title = rreLang.title.LIVE;
    var menu = rreLang.title;
    return {
        title: function() {
            return title;
        },
        menu: function() {
            return menu;
        },
        config: function() {
            return rreConfig;
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
    Page.setTitle(rreLang.title.LIVE);
    $scope.onNow = rreLang.message.ON_NOW + ": " + "Program 1";
    $scope.onNext = rreLang.message.ON_NEXT + ": " + "Program 2";

    $scope.snapOpts = {
        disable: 'right'
    };

    $scope.audioPlaylist = [];
    $scope.audioPlaylist.push({
        src: rreConfig.AUDIO_SRC,
        type: rreConfig.AUDIO_FORMAT
    });
});

rreApp.controller('listenagainController', function($scope, Page) {
    Page.setTitle(rreLang.title.LISTEN_AGAIN);
    $scope.message = rreLang.message.LISTEN_AGAIN_TO_PAST_SHOWS;
});

rreApp.controller('scheduleController', function($scope, Page) {
    Page.setTitle(rreLang.title.SCHEDULE);

    $scope.eventSource = {
        url: rreConfig.CAL_SRC,
        className: 'gcal-event', // an option!
        currentTimezone: rreConfig.CAL_TIMEZONE // an option!
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
    $scope.message = rreLang.message.COMING_UP;
});