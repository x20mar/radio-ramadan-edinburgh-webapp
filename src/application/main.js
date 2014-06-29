var rreConfig = {
    AUDIO_SRC: "http://s7.voscast.com:8166/;",
    AUDIO_FORMAT: "audio/mp3",
    CAL_SRC: "http://www.google.com/calendar/feeds/admin%40radioramadanedinburgh.com/public/basic",
    CAL_TIMEZONE: "Europe/London",
    SOUNDCLOUD_SET: "http://soundcloud.com/radioramadan-edinburgh/sets/radio-ramadan-2014",
    FACEBOOK_URL: "https://www.facebook.com/radioramadan.edinburgh"
};

var rreLang = {
    title: {
        MENU: "Menu",
        LIVE: "Live",
        LISTEN_AGAIN: "Listen Again",
        SCHEDULE: "Schedule",
        FACEBOOK: "Like"},
    message: {
        ON_NOW: "On Now",
        ON_NEXT: "On Next",
        LISTEN_AGAIN_TO_PAST_SHOWS: "Listen Again to past shows",
        COMING_UP: "See what shows are coming up on Radio Ramadan",
        CLICK_TO_PAY: "Press the button to start listening",
        OFF_AIR: "We're off air for this year. See you next year"
    }
};

var timetable = [{"Key":"28-Jun","Fajr":1403911380,"Sunrise":1403918760,"Dhur":1403950620,"Asr":1403971440,"Maghrib":1403982360,"Isha":1403985480},{"Key":"29-Jun","Fajr":1403997840,"Sunrise":1404005220,"Dhur":1404037020,"Asr":1404057840,"Maghrib":1404068700,"Isha":1404071880},{"Key":"30-Jun","Fajr":1404084360,"Sunrise":1404091680,"Dhur":1404123480,"Asr":1404144240,"Maghrib":1404155100,"Isha":1404158280},{"Key":"01-Jul","Fajr":1404170940,"Sunrise":1404178080,"Dhur":1404209880,"Asr":1404230640,"Maghrib":1404241500,"Isha":1404244680},{"Key":"02-Jul","Fajr":1404257460,"Sunrise":1404264540,"Dhur":1404296280,"Asr":1404317040,"Maghrib":1404327840,"Isha":1404331020},{"Key":"03-Jul","Fajr":1404344040,"Sunrise":1404351000,"Dhur":1404382680,"Asr":1404403440,"Maghrib":1404414240,"Isha":1404417420},{"Key":"04-Jul","Fajr":1404430620,"Sunrise":1404437460,"Dhur":1404469080,"Asr":1404489840,"Maghrib":1404500580,"Isha":1404503760},{"Key":"05-Jul","Fajr":1404517200,"Sunrise":1404523920,"Dhur":1404555480,"Asr":1404576240,"Maghrib":1404586920,"Isha":1404590160},{"Key":"06-Jul","Fajr":1404603840,"Sunrise":1404610380,"Dhur":1404641940,"Asr":1404662580,"Maghrib":1404673320,"Isha":1404676560},{"Key":"07-Jul","Fajr":1404690360,"Sunrise":1404696840,"Dhur":1404728340,"Asr":1404748980,"Maghrib":1404759660,"Isha":1404762900},{"Key":"08-Jul","Fajr":1404776940,"Sunrise":1404783300,"Dhur":1404814740,"Asr":1404835380,"Maghrib":1404846000,"Isha":1404849240},{"Key":"09-Jul","Fajr":1404863460,"Sunrise":1404869760,"Dhur":1404901140,"Asr":1404921720,"Maghrib":1404932340,"Isha":1404935640},{"Key":"10-Jul","Fajr":1404950040,"Sunrise":1404956280,"Dhur":1404987540,"Asr":1405008120,"Maghrib":1405018680,"Isha":1405021980},{"Key":"11-Jul","Fajr":1405036620,"Sunrise":1405042740,"Dhur":1405073940,"Asr":1405094460,"Maghrib":1405105020,"Isha":1405108320},{"Key":"12-Jul","Fajr":1405123140,"Sunrise":1405129200,"Dhur":1405160400,"Asr":1405180860,"Maghrib":1405191360,"Isha":1405194720},{"Key":"13-Jul","Fajr":1405209720,"Sunrise":1405215720,"Dhur":1405246800,"Asr":1405267200,"Maghrib":1405277700,"Isha":1405281060},{"Key":"14-Jul","Fajr":1405296300,"Sunrise":1405302180,"Dhur":1405333200,"Asr":1405353600,"Maghrib":1405363980,"Isha":1405367400},{"Key":"15-Jul","Fajr":1405382880,"Sunrise":1405388640,"Dhur":1405419600,"Asr":1405439940,"Maghrib":1405450320,"Isha":1405453740},{"Key":"16-Jul","Fajr":1405469460,"Sunrise":1405475160,"Dhur":1405506000,"Asr":1405526340,"Maghrib":1405536660,"Isha":1405540080},{"Key":"17-Jul","Fajr":1405555980,"Sunrise":1405561620,"Dhur":1405592400,"Asr":1405612680,"Maghrib":1405623000,"Isha":1405626480},{"Key":"18-Jul","Fajr":1405642560,"Sunrise":1405648140,"Dhur":1405678800,"Asr":1405699020,"Maghrib":1405709280,"Isha":1405712760},{"Key":"19-Jul","Fajr":1405729080,"Sunrise":1405734660,"Dhur":1405765200,"Asr":1405785360,"Maghrib":1405795620,"Isha":1405799160},{"Key":"20-Jul","Fajr":1405815660,"Sunrise":1405821120,"Dhur":1405851600,"Asr":1405871760,"Maghrib":1405881900,"Isha":1405885440},{"Key":"21-Jul","Fajr":1405902180,"Sunrise":1405907640,"Dhur":1405938000,"Asr":1405958100,"Maghrib":1405968240,"Isha":1405971720},{"Key":"22-Jul","Fajr":1405988580,"Sunrise":1405994100,"Dhur":1406024400,"Asr":1406044440,"Maghrib":1406054520,"Isha":1406058120},{"Key":"23-Jul","Fajr":1406075220,"Sunrise":1406080620,"Dhur":1406110800,"Asr":1406130780,"Maghrib":1406140800,"Isha":1406144400},{"Key":"24-Jul","Fajr":1406161800,"Sunrise":1406167140,"Dhur":1406197200,"Asr":1406217120,"Maghrib":1406227140,"Isha":1406230800},{"Key":"25-Jul","Fajr":1406248380,"Sunrise":1406253660,"Dhur":1406283600,"Asr":1406303460,"Maghrib":1406313420,"Isha":1406317200},{"Key":"26-Jul","Fajr":1406334900,"Sunrise":1406340120,"Dhur":1406370000,"Asr":1406389800,"Maghrib":1406399700,"Isha":1406403540},{"Key":"27-Jul","Fajr":1406421420,"Sunrise":1406426640,"Dhur":1406456400,"Asr":1406476140,"Maghrib":1406485980,"Isha":1406489940},{"Key":"28-Jul","Fajr":1406508000,"Sunrise":1406513160,"Dhur":1406542800,"Asr":1406562480,"Maghrib":1406572320,"Isha":1406576100}];

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
        },
        getTimetable: function(pKey){
            var today = null;
            angular.forEach(timetable, function(tt, index) {
                if(tt.Key == pKey){
                    today = tt;
                }
            });
            return today;
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
    $scope.clickToPlay = rreLang.message.CLICK_TO_PAY;
    $scope.offAir = rreLang.message.OFF_AIR;

    var d = new Date();
    var month_names_short = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var prayerKey = d.getDate() + "-" + month_names_short[d.getMonth()];
    var timetable = Page.getTimetable(prayerKey);
    $scope.timetable = timetable;
    $scope.active = angular.isObject(timetable);

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
},

rreApp.directive('pgInAppBrowserLink', function () {
    return function (scope, elem) {
      elem.bind('click', function (e) {
        var ref = window.open(encodeURI(elem.attr('href')), '_system', 'location=yes');
        ref.addEventListener('loadstart', function() { alert(event.url); });
        e.preventDefault();
      });
    };
  })
);
