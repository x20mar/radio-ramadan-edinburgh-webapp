/* Setting up the RRE namespace if it doesn't already exist */
namespacer(window, {RRE: {language: { title:{}, message:{}}}});

(function(namespace, $) {
    namespace.MENU = "Menu";
    namespace.LIVE = "Live";
    namespace.LISTEN_AGAIN = "Listen Again";
    namespace.SCHEDULE = "Schedule";
})(RRE.language.title, jQuery);

(function(namespace, $) {
    namespace.ON_NOW = "On Now";
    namespace.ON_NEXT = "On Next";
    namespace.LISTEN_AGAIN_TO_PAST_SHOWS = "Listen Again to past shows";
    namespace.COMING_UP = "See what shows are coming up on Radio Ramadan";
})(RRE.language.message, jQuery);