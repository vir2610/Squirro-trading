!function(t) {
    "use strict";
    var a = t(".validate-input .input100");
    function i(a) {
        if ("email" == t(a).attr("type") || "email" == t(a).attr("name")) {
            if (null == t(a).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/))
                return !1
        } else if ("" == t(a).val().trim())
            return !1
    }
    function e(a) {
        var i = t(a).parent();
        t(i).addClass("alert-validate")
    }
    t(".validate-form").on("submit", function() {
        for (var t = !0, n = 0; n < a.length; n++)
            0 == i(a[n]) && (e(a[n]),
            t = !1);
        return t
    }),
    t(".validate-form .input100").each(function() {
        t(this).focus(function() {
            var a;
            a = t(this).parent(),
            t(a).removeClass("alert-validate")
        })
    })
}(jQuery);
