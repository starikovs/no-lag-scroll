(function ($) {
    $.fn.noLagScroll = function (options) {
        var name = "no-lag-scroll",
            style = '<style id="' + name + '">.no-lag-scroll,.no-lag-scroll *{pointer-events:none !important;}</style>',
            timer,
            settings = $.extend({
                freezeEl: $("body"),
                timeout: 500
            }, options);

        if ($("#" + name).length === 0) {
            $(style).appendTo("head");
        }

        this.off("." + name).on("scroll." + name, function () {
            var el = settings.freezeEl;

            if (timer) {
                clearTimeout(timer);
            }

            if (!el.hasClass(name)) {
                el.addClass(name);
            }

            timer = setTimeout(function() {
                el.removeClass(name);
            }, settings.timeout);
        });

        return this;
    };
})(jQuery);

