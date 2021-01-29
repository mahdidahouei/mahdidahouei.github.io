// Opera 8.0+
function isOpera() {
    return (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
}

// Firefox 1.0+
function isFirefox() {
    return typeof InstallTrigger !== 'undefined';
}

// Safari 3.0+ "[object HTMLElementConstructor]"
function isSafari() {
    return /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification));
}

// Internet Explorer 6-11
function isIE() {
    return /*@cc_on!@*/false || !!document.documentMode;
}

// Edge 20+
function isEdge() {
    return !isIE && !!window.StyleMedia;
}

// Chrome 1 - 79
function isChrome() {
    return !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
}

// Edge (based on chromium) detection
function isEdgeChromium() {
    return isChrome && (navigator.userAgent.indexOf("Edg") != -1);
}

// Blink engine detection
function isBlink() {return (
    isChrome || isOpera) && !!window.CSS;
}