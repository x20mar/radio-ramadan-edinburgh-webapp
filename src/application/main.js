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

var timetable = [{"Key":"28-Jun","Fajr":1403918580,"Sunrise":1403925960,"Dhur":1403957820,"Asr":1403978640,"Maghrib":1403989560,"Isha":1403992680},{"Key":"29-Jun","Fajr":1404005040,"Sunrise":1404012420,"Dhur":1404044220,"Asr":1404065040,"Maghrib":1404075900,"Isha":1404079080},{"Key":"30-Jun","Fajr":1404091560,"Sunrise":1404098880,"Dhur":1404130680,"Asr":1404151440,"Maghrib":1404162300,"Isha":1404165480},{"Key":"01-Jul","Fajr":1404178140,"Sunrise":1404185280,"Dhur":1404217080,"Asr":1404237840,"Maghrib":1404248700,"Isha":1404251880},{"Key":"02-Jul","Fajr":1404264660,"Sunrise":1404271740,"Dhur":1404303480,"Asr":1404324240,"Maghrib":1404335040,"Isha":1404338220},{"Key":"03-Jul","Fajr":1404351240,"Sunrise":1404358200,"Dhur":1404389880,"Asr":1404410640,"Maghrib":1404421440,"Isha":1404424620},{"Key":"04-Jul","Fajr":1404437820,"Sunrise":1404444660,"Dhur":1404476280,"Asr":1404497040,"Maghrib":1404507780,"Isha":1404510960},{"Key":"05-Jul","Fajr":1404524400,"Sunrise":1404531120,"Dhur":1404562680,"Asr":1404583440,"Maghrib":1404594120,"Isha":1404597360},{"Key":"06-Jul","Fajr":1404611040,"Sunrise":1404617580,"Dhur":1404649140,"Asr":1404669780,"Maghrib":1404680520,"Isha":1404683760},{"Key":"07-Jul","Fajr":1404697560,"Sunrise":1404704040,"Dhur":1404735540,"Asr":1404756180,"Maghrib":1404766860,"Isha":1404770100},{"Key":"08-Jul","Fajr":1404784140,"Sunrise":1404790500,"Dhur":1404821940,"Asr":1404842580,"Maghrib":1404853200,"Isha":1404856440},{"Key":"09-Jul","Fajr":1404870660,"Sunrise":1404876960,"Dhur":1404908340,"Asr":1404928920,"Maghrib":1404939540,"Isha":1404942840},{"Key":"10-Jul","Fajr":1404957240,"Sunrise":1404963480,"Dhur":1404994740,"Asr":1405015320,"Maghrib":1405025880,"Isha":1405029180},{"Key":"11-Jul","Fajr":1405043820,"Sunrise":1405049940,"Dhur":1405081140,"Asr":1405101660,"Maghrib":1405112220,"Isha":1405115520},{"Key":"12-Jul","Fajr":1405130340,"Sunrise":1405136400,"Dhur":1405167600,"Asr":1405188060,"Maghrib":1405198560,"Isha":1405201920},{"Key":"13-Jul","Fajr":1405216920,"Sunrise":1405222920,"Dhur":1405254000,"Asr":1405274400,"Maghrib":1405284900,"Isha":1405288260},{"Key":"14-Jul","Fajr":1405303500,"Sunrise":1405309380,"Dhur":1405340400,"Asr":1405360800,"Maghrib":1405371180,"Isha":1405374600},{"Key":"15-Jul","Fajr":1405390080,"Sunrise":1405395840,"Dhur":1405426800,"Asr":1405447140,"Maghrib":1405457520,"Isha":1405460940},{"Key":"16-Jul","Fajr":1405476660,"Sunrise":1405482360,"Dhur":1405513200,"Asr":1405533540,"Maghrib":1405543860,"Isha":1405547280},{"Key":"17-Jul","Fajr":1405563180,"Sunrise":1405568820,"Dhur":1405599600,"Asr":1405619880,"Maghrib":1405630200,"Isha":1405633680},{"Key":"18-Jul","Fajr":1405649760,"Sunrise":1405655340,"Dhur":1405686000,"Asr":1405706220,"Maghrib":1405716480,"Isha":1405719960},{"Key":"19-Jul","Fajr":1405736280,"Sunrise":1405741860,"Dhur":1405772400,"Asr":1405792560,"Maghrib":1405802820,"Isha":1405806360},{"Key":"20-Jul","Fajr":1405822860,"Sunrise":1405828320,"Dhur":1405858800,"Asr":1405878960,"Maghrib":1405889100,"Isha":1405892640},{"Key":"21-Jul","Fajr":1405909380,"Sunrise":1405914840,"Dhur":1405945200,"Asr":1405965300,"Maghrib":1405975440,"Isha":1405978920},{"Key":"22-Jul","Fajr":1405995780,"Sunrise":1406001300,"Dhur":1406031600,"Asr":1406051640,"Maghrib":1406061720,"Isha":1406065320},{"Key":"23-Jul","Fajr":1406082420,"Sunrise":1406087820,"Dhur":1406118000,"Asr":1406137980,"Maghrib":1406148000,"Isha":1406151600},{"Key":"24-Jul","Fajr":1406169000,"Sunrise":1406174340,"Dhur":1406204400,"Asr":1406224320,"Maghrib":1406234340,"Isha":1406238000},{"Key":"25-Jul","Fajr":1406255580,"Sunrise":1406260860,"Dhur":1406290800,"Asr":1406310660,"Maghrib":1406320620,"Isha":1406324400},{"Key":"26-Jul","Fajr":1406342100,"Sunrise":1406347320,"Dhur":1406377200,"Asr":1406397000,"Maghrib":1406406900,"Isha":1406410740},{"Key":"27-Jul","Fajr":1406428620,"Sunrise":1406433840,"Dhur":1406463600,"Asr":1406483340,"Maghrib":1406493180,"Isha":1406497140},{"Key":"28-Jul","Fajr":1406515200,"Sunrise":1406520360,"Dhur":1406550000,"Asr":1406569680,"Maghrib":1406579520,"Isha":1406583300}];

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
    var ptimetable = Page.getTimetable(prayerKey);
    $scope.ptimetable = ptimetable;
    $scope.active = angular.isObject(ptimetable);

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
