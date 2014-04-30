/* Setting up the RRE namespace if it doesn't already exist */
namespacer(window, {RRE: {language: { title:{}, message:{}}}});

(function(namespace, $) {
    namespace.LIVE = "Live";
    namespace.LISTEN_AGAIN = "Listen Again";
    namespace.SCHEDULE = "Schedule";
})(RRE.language.title, jQuery);


