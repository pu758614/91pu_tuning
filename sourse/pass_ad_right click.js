javascript: var s = document.createElement("script");
s.setAttribute("src", "//code.jquery.com/jquery.js");
document.getElementsByTagName("body")[0].appendChild(s);
R("contextmenu");
R("click");
R("mousedown");
R("mouseup");
R("selectstart");
$("#viptoneWindow").remove("");

function R(b) {
    ona = "on" + b;
    window.addEventListener && window.addEventListener(b, function(a) {
        for (a = a.originalTarget; a; a = a.parentNode) a[ona] = null
    }, !0);
    window[ona] = null;
    document[ona] = null;
    document.onkeydown = null;
    document.body && (document.body[ona] = null);
    document.body.oncopy = null
};