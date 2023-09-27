'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "9b818ca9511483c901bed1545384376c",
"index.html": "856e51f31a380c70657b27d55fb7efdb",
"/": "856e51f31a380c70657b27d55fb7efdb",
"CNAME": "aa9fb5c895f59df0fceeddab82ad73cf",
"main.dart.js": "1adde4daeb9db9b219b7abe863633750",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"README.md": "ccf10a2674a3119534d6b19aa3df7110",
"favicon.png": "0080481723f567771144f9b1f21e0927",
"icons/Icon-192.png": "59339a702e78d4c303e9fda7854fc92e",
"icons/Icon-maskable-192.png": "68903f581544471d37dd909317fb1aea",
"icons/Icon-maskable-512.png": "d73c4e160159edcbc222f25804cab85c",
"icons/Icon-512.png": "de18bbc6547635c7dca830fdc9623978",
"manifest.json": "e67dbb1ee066fb082cbf575c88431d89",
"utils.js": "1d6b9c99ca427051cb9066f153a43b42",
"assets/AssetManifest.json": "f29c481498ebd131fbc85d0ede9752d4",
"assets/NOTICES": "36ebbcdcf9791b9943e8951fe572ce81",
"assets/FontManifest.json": "70defdf4e87fe92b75a29066dab2502f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "70a9de2b3ccfcaf64021efe057c72933",
"assets/fonts/MaterialIcons-Regular.otf": "a5251c242aa075b17098ef93c428d3cf",
"assets/assets/images/piano.jpg": "612cc479c50df37356e482222d97dbf1",
"assets/assets/images/telegram.png": "107c9063a8624c32ec10b139a0fe9db8",
"assets/assets/images/git.png": "f79a16810313ef35d000676c67f3528d",
"assets/assets/images/instagram.png": "bdd83f2dcc663a1cc5b1c8dba9259bc3",
"assets/assets/images/github.png": "ccd323e597ec605b5fbb26b618dba53f",
"assets/assets/images/java.png": "2567420ecb5cbac21e243235ba75db6b",
"assets/assets/images/android.png": "76c6274a99ce7abff7e53b933717ef80",
"assets/assets/images/gmail.png": "1afcb319c029ec5da10efb593b7159c8",
"assets/assets/images/figma.png": "a75b15714d491deb0d7c46677294a851",
"assets/assets/images/flutter_code.jpg": "6a9332b5c4a76a40353f8b3f77bdfba3",
"assets/assets/images/my_picture_2.jpg": "92fcde6bc560715fec0587fd81828fc0",
"assets/assets/images/my_picture_1.jpg": "1ae047efe328bf7810c5a5a4d4feb302",
"assets/assets/images/bloc.png": "8e90114b3ccd56e00aae4f00252a0acf",
"assets/assets/images/soundcloud.png": "673220db910f0bc935571253051fac06",
"assets/assets/images/flutter_code_blur.jpg": "319386b3e1977e91565ed7c70d28f928",
"assets/assets/images/swift.png": "cee7a225073f24dcae7d759e56782390",
"assets/assets/images/mahdi.png": "f402406c9763e8659be9a24adda7c39b",
"assets/assets/images/linkedin.png": "aba12d7e55ec5d50045983d728012675",
"assets/assets/images/youtube.png": "817316d9a99e8640964b117bc1bd26fd",
"assets/assets/images/stackoverflow.png": "ec0193efc3542306bfacbf6e4f692569",
"assets/assets/images/dart.png": "36b422db63b2927e72e2eab4a484d341",
"assets/assets/images/nodejs.png": "36335b3269caf70ebd3180e3c8373634",
"assets/assets/fonts/MyIcons.ttf": "3847df78c5ab89c696aacf98640af0ed",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
