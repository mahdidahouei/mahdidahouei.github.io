function isInStandaloneMode() {
    return ('standalone' in window.navigator) && (window.navigator.standalone);
}