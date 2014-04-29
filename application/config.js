/* Setting up the RRE namespace if it doesn't already exist */
namespacer(window, {RRE: {config: {}}});

(function(namespace, $) {
    namespace.AUDIO_SRC = "http://danosongs.com/music/danosongs.com-orb-of-envisage.mp3";
    namespace.AUDIO_FORMAT = "audio/mp3";
    namespace.CAL_SRC = "http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic";
    namespace.CAL_TIMEZONE = "America/Chicago";
})(RRE.config, jQuery);
