
// Firefox 1.0+
function isFirefox() {
    return typeof InstallTrigger !== 'undefined';
}

// Safari 3.0+ "[object HTMLElementConstructor]"
function isSafari() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') != -1) {
      if (ua.indexOf('chrome') > -1) {
        return false; // Chrome
      } else {
        return true; // Safari
      }
    }
    return false;
}

// Chrome 1 - 79
function isChrome() {
    return navigator.userAgent.indexOf("Chrome") != -1;
}