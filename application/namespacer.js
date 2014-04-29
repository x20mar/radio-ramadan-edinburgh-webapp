window.namespacer = (function($) {
    namespace = function(root, namespaces) {
        $.each(namespaces, function(key, value) {
            root[key] = root[key] || {};
            if (value) {
                namespace(root[key], value);
            }
        });
        return root;
    };
    return namespace;
})(jQuery);