'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "fb0fc7ae0aa0ae192974b18af49870b5",
"index.html": "c7d26d668beadc27ed0155a9cf313f70",
"/": "c7d26d668beadc27ed0155a9cf313f70",
"CNAME": "aa9fb5c895f59df0fceeddab82ad73cf",
"main.dart.js": "85db122138ce98d275de08f68e957a79",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/icon-192.png": "9a5ac659bb780e2bbae148170fcfb7b9",
"icons/icon-maskable-192.png": "9a5ac659bb780e2bbae148170fcfb7b9",
"icons/icon-maskable-512.png": "2aac3dbf2e389a10d5200b58e6c2df70",
"icons/icon-512.png": "2aac3dbf2e389a10d5200b58e6c2df70",
"manifest.json": "23716e07e1ca7d0851cac539043c0703",
"assets/AssetManifest.json": "7bac2544aaece6a6e9638d5295b19dd5",
"assets/NOTICES": "dc1ef14d1a3eac176be2be18d67d7341",
"assets/FontManifest.json": "80f181f6129afe3422715d52ae7309e8",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "e523a0bbfb82f5c6a4e3b22450fed847",
"assets/fonts/MaterialIcons-Regular.otf": "4fb738754298721845e6c265b0b8b384",
"assets/assets/images/afterhours.png": "e706a17e8ab7166a2229cfc15568485c",
"assets/assets/images/splash_icon.png": "ac89433547f304357937b15b024b638b",
"assets/assets/images/background.jpg": "c6f7701978892a15bf8c9b61ff9a2b0b",
"assets/assets/images/dino/dino_restart.png": "46e6f4dfe6c27ae32318310d26aae208",
"assets/assets/images/dino/ptera/ptera_2.png": "853c69a67326f4a9462868401441f745",
"assets/assets/images/dino/ptera/ptera_1.png": "66dc9a42bdd5a236292a7c9b3b7f4eed",
"assets/assets/images/dino/dino/dino_4.png": "70507f669321eee2da5830a4f8796ad5",
"assets/assets/images/dino/dino/dino_5.png": "f00f766ef0d7073823403da320aaa04a",
"assets/assets/images/dino/dino/dino_6.png": "9b4bbf8ca06e687fe7f4df08eeb5d3f1",
"assets/assets/images/dino/dino/dino_2.png": "0b75509945c0853f78cd5aed4b43cb44",
"assets/assets/images/dino/dino/dino_3.png": "ed7d6ece23a7c12678b05c122749812e",
"assets/assets/images/dino/dino/dino_1.png": "62b4fece93cb8e9f316451a80d6129c5",
"assets/assets/images/dino/dino_back.png": "5bb860b89f95f6e1ecec64a20fe1b6e8",
"assets/assets/images/dino/cloud.png": "eadedff8b503629e4ddb4e8063193a8e",
"assets/assets/images/dino/ground.png": "d5b0caa02872af28a08a093dd5e342ad",
"assets/assets/images/dino/dino_all.png": "509588200e431bed5d733c9addfa900c",
"assets/assets/images/dino/cacti/cacti_small_1.png": "0668ba3ea7ec9d2606b5baff45d23e19",
"assets/assets/images/dino/cacti/cacti_small_2.png": "c38e4da2f7f048bd9d8c6f4cfb9f7099",
"assets/assets/images/dino/cacti/cacti_small_3.png": "064354768bf45a8ea1acf06102a2cc15",
"assets/assets/images/dino/cacti/cacti_group.png": "1b99d122947d7daeae59a704ba6f7eaa",
"assets/assets/images/dino/cacti/cacti_large_2.png": "803313f9ba3c1dfd2ad619390bf2aceb",
"assets/assets/images/dino/cacti/cacti_large_1.png": "93fcf2985e22fdc44c47c24461182932",
"assets/assets/images/afterhours_pixelated.png": "218dabe65a1ca608152d565db016ea8c",
"assets/assets/images/on_boarding_1.png": "29cb41d36537220620e15283e78d9a99",
"assets/assets/images/eating_together.png": "3df87a0f97738e5d7c4dd5ce5baef3f6",
"assets/assets/images/on_boarding_2.png": "71cbd8b6b1131003c97da4c6aed9e92c",
"assets/assets/images/on_boarding_3.png": "6dc261622c14981ea6e917620615c559",
"assets/assets/images/afterhours_logo_disabled.png": "cab5fbaaf5bd5214dad0829742083a97",
"assets/assets/images/on_boarding_4.png": "a5ded716d2362854c39b1e73d0679bde",
"assets/assets/lang/en_rich_texts.json": "32bbf13cee211685385c15926a2c7cd6",
"assets/assets/lang/en.json": "59ed92e9e3f7bca5c72634bed50d8f74",
"assets/assets/lang/en_terms_and_conditions.md": "80882d8ddde915455fb7b314aaef9667",
"assets/assets/lang/en_privacy_policy.md": "2f8c6926d0cb2bbf60be2f79451230af",
"assets/assets/icons/selected_bad.png": "46d53ffa78fb68d71d381c284b09cfee",
"assets/assets/icons/maintenance.png": "6d3e00cfe167eebdc0f57a10da4dbb51",
"assets/assets/icons/email.png": "c11d9563297dcf14bc94fdfcf8fe3566",
"assets/assets/icons/wifi.png": "d9723ec36da18bbe699c10b16dbb0d7c",
"assets/assets/icons/warning.png": "72da9f098a94f31619381919659f4767",
"assets/assets/icons/arrow_right.png": "c91da272be2926f0213e2ba83a027870",
"assets/assets/icons/flag.png": "62481e10814fc19b20e639c046eae0dd",
"assets/assets/icons/save_remove.png": "dcd91a26827fa75ef497c552a13717ef",
"assets/assets/icons/unsuccessful_book.png": "5e7202ad504736f8ac4761635510e689",
"assets/assets/icons/book.png": "e7ae1cf8b42d0b1edb3418427e7ad91b",
"assets/assets/icons/login.png": "27ee9d3d7ec39b49d2d6d823323afb7b",
"assets/assets/icons/delete_account.png": "81a65e87cec2f2d7b0ee190b1811a903",
"assets/assets/icons/attended.png": "502f67931ce2c52418d98b6a9ffd263f",
"assets/assets/icons/afterhours_white.png": "0077df3688ec78f2345278a246138726",
"assets/assets/icons/map.png": "b615b9035d9ef0bbffdbe68179a62a2b",
"assets/assets/icons/selected_good.png": "a85f9257f54866850307adf941377d9c",
"assets/assets/icons/cancel.png": "36faa09caa41793c19dbc603cec5d1a6",
"assets/assets/icons/profile_unselected.png": "073ff29a21ef44da1fe3fbe6a859bd49",
"assets/assets/icons/cancelled.png": "a7e51eae8740f7e141bec3ab3fcf0930",
"assets/assets/icons/logout.png": "b6c67c7bb662c5e0c7071f6ad93522d9",
"assets/assets/icons/home.png": "95a6c5f636a27f4c9c4e29ffec7141eb",
"assets/assets/icons/unselected_meh.png": "f9c8a92f04e06eb94a4dc6c93848ec74",
"assets/assets/icons/like.png": "4ea32e336aece5afb0d95e6a354ce249",
"assets/assets/icons/unselected_love.png": "88514fe1d41c000ca746a9d3fbd7fbfb",
"assets/assets/icons/un_attended.png": "949b7e6aabd02a9ba4abbb9e91b27c77",
"assets/assets/icons/selected_love.png": "37e33ddef684f976c3a12920a189b646",
"assets/assets/icons/avatar.png": "6b2c19a6c9fc7dbdf6b476f35d9bd06d",
"assets/assets/icons/confirmed.png": "f8e1d2703c1518403fde0e802c765cb7",
"assets/assets/icons/error.png": "fd662410bf366643007f5ede8b943660",
"assets/assets/icons/home_unselected.png": "1678c102e78d0f26142d768a018736fb",
"assets/assets/icons/unselected_good.png": "521108a01f598433bb1d0c6215d1d8fb",
"assets/assets/icons/afterhours_primary.png": "0d41266b296bfee266c83125a5ecdf10",
"assets/assets/icons/remove.png": "05fc394eb81032d69f6a82d028626e2f",
"assets/assets/icons/share.png": "0ff19a1236440bcc33fd739d60f1ab91",
"assets/assets/icons/profile.png": "9069d13b22ea5bbd383dfb79652e6ce4",
"assets/assets/icons/location.png": "a56005e2599671c7b4f901280b103e9d",
"assets/assets/icons/call.png": "6d8500a6d56be04203bf467f13bf9111",
"assets/assets/icons/unselected_bad.png": "d89f396670ad1aa5ba77a982ab8c572d",
"assets/assets/icons/exit.png": "df8fa3251dc104cc792620debe904959",
"assets/assets/icons/verify_square.png": "492eb1c524d8e85ea97054d7db6ad910",
"assets/assets/icons/remove_success.png": "808a3f16f4401c43e4acde54f16d942d",
"assets/assets/icons/unselected_awful.png": "5922c51189d1d24ee26dde0f2470d476",
"assets/assets/icons/selected_meh.png": "c0583b3bbece506d2824bbbc243d82d7",
"assets/assets/icons/stars.png": "9d17a23136adab63109e2babf10f2f52",
"assets/assets/icons/verify.png": "3a8510b635c43a8b8c94c96a87e18171",
"assets/assets/icons/book_unselected.png": "edafb2cb9200806dcc08abc961f305b9",
"assets/assets/icons/selected_awful.png": "6599028d8056d09eb1cc6406635fd14f",
"assets/assets/icons/refresh.png": "5bb2320d4cb594a0606acde9f05c73f7",
"assets/assets/icons/reserve.png": "b49b7671ebfa17efa77ea5ba90a71f67",
"assets/assets/icons/pending.png": "8afc2f76f00b818b9f7fb7b48d2424d7",
"assets/assets/lottie/loading.json": "ad8b0d23e26dca1bca0bd91f73e31be1",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/AfterhoursIcons.ttf": "712245a85645b0042cb41f272717579d",
"assets/assets/fonts/PressStart2P.ttf": "f98cd910425bf727bd54ce767a9b6884",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"favicon.svg": "9f61e818daa6e5dea9f2acc4364220e9",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
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
