function downloadURI(uri, fileName, token)
{
 let anchor = document.createElement("a");
 document.body.appendChild(anchor);

 let headers = new Headers();
 headers.append('Authorization', 'Bearer ' + token);

 fetch(uri, { headers })
     .then(response => response.blob())
     .then(blobby => {
         let objectUrl = window.URL.createObjectURL(blobby);

         anchor.href = objectUrl;
         anchor.download = fileName;
         anchor.click();

         window.URL.revokeObjectURL(objectUrl);
     });
}

function launchUrlSelf(url) {
    location.href = url;
}

function isInStandaloneMode() {
    return ('standalone' in window.navigator) && (window.navigator.standalone);
}