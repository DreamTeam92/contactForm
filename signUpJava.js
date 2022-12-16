"use strict";
! function(r, o) {
    var e = function() {
        (eq = eq || []).push(arguments)
    };
    r.gsc = r.gsc || e;
    var c = new XMLHttpRequest;
    c.open("get", "ympSignUp.json", !0), c.onload = function() {
        var e = JSON.parse(c.responseText);
        if (e && e.widgets && e.widgets.length) {
            var t = o.getElementsByTagName("script"),
                n = t[t.length - 1],
                s = o.createElement("script");
            s.onload = function() {
                r.gsc.start && r.gsc.start(e)
            }, s.src = e.script["noModule" in n ? "mjs" : "js"], n.parentNode.insertBefore(s, n)
        }
    }, c.send(null)
}(window, document);
