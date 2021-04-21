function downloadURI(uri)
{
    var link = document.createElement("a");
    link.setAttribute('download', "");
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    link.remove();
}

function launchUrlSelf(url) {
    location.href = url;
}

function isInStandaloneMode() {
    return ('standalone' in window.navigator) && (window.navigator.standalone);
}