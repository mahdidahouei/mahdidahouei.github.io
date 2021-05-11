'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "011e7159b778563ba73a8d719eb61043",
"assets/assets/fonts/IRANSansMobileFaNum-Bold.ttf": "4bac6b68236f494a59b54c44a1ed529f",
"assets/assets/fonts/IRANSansMobileFaNum-Light.ttf": "3d18be052a4de0da6d0f2aaef74bbae5",
"assets/assets/fonts/IRANSansMobileFaNum-Medium.ttf": "c37aafe885d7245042a5731e96a2acd2",
"assets/assets/fonts/IRANSansMobileFaNum-UltraLight.ttf": "35b822df0e8d7af2f66c3f3c9c4940f0",
"assets/assets/fonts/IRANSansMobileFaNum.ttf": "7053ef9b87586e56bb37ca6c11eae47f",
"assets/assets/images/friend_1.webp": "448d1a32c26cefb6e8f80af0f4833440",
"assets/assets/images/friend_2.webp": "bba24457579f17d6d2c168b41ffe2329",
"assets/assets/images/friend_3.webp": "0bb7a6a57b38bd85229636777935effa",
"assets/assets/images/introduction1.png": "e0858860e617c99d2942eef7d1b970be",
"assets/assets/images/introduction2.png": "6acf134904b364dbdd5496e25e6454aa",
"assets/assets/images/introduction3.png": "d2a8dc7a036fdc4665f80c7a518c443a",
"assets/assets/images/map.png": "a8025baf65bbd0785654b6cbda5a93f4",
"assets/assets/images/profile_placeholder.webp": "914608520ec0b2ac9af9934c1ec92f3b",
"assets/assets/images/scheme_a_doc.png": "bde16ae0792866ce0613083afbc028e1",
"assets/assets/images/scheme_b_doc.png": "d9908102a44c43a2802a02c21dacb60c",
"assets/assets/images/tree.jpg": "8a9de22a458852f9e40abc2904cd8edc",
"assets/assets/images/trees_not_loaded.png": "357b000fc5deb745bd7ada170aba2ad3",
"assets/assets/images/tree_not_planted.png": "5a7714f85bf3fdbac13afb50b3c6655c",
"assets/assets/lang/fa.json": "69db5054f0a058a1c8668981b338eb78",
"assets/assets/lang/fa_bill_faq.json": "8897946eec5f0e468be017eefbb05546",
"assets/assets/lang/fa_faq.json": "ea31806ee3e8e42f296e3a721a4cbf3b",
"assets/assets/lang/fa_rich_texts.json": "a6c6412ba53846a76a58e29e1f0b0a8d",
"assets/assets/operators/area_codes.json": "0af0eb5883021657038b3edb0c6ad472",
"assets/assets/svg/about_us.svg": "de7e66265dcc8be9ce6eaf87cf7db542",
"assets/assets/svg/account.svg": "777e0c5f3ecb89da301eb4c70a493ab7",
"assets/assets/svg/account_balance.svg": "1169b096c2b776ac814a0ef15cf207d2",
"assets/assets/svg/account_balance_disabled.svg": "5a20518f9638d1e57827574db66e89a2",
"assets/assets/svg/bill_id.svg": "deb6284b1b76b91c51d13d8cd5189ba9",
"assets/assets/svg/bill_payment.svg": "82b8725debe710790d1646c6ba539b9b",
"assets/assets/svg/charge_sim.svg": "846f4ec091a132e6b2836cddda775fab",
"assets/assets/svg/charge_sim_disabled.svg": "187f139fae76cb2e26ded56debd35e66",
"assets/assets/svg/clear.svg": "ea80f3459f68a447ff948be8c802e572",
"assets/assets/svg/contacts.svg": "59695239d859572d02eebe0d974d2634",
"assets/assets/svg/contact_support.svg": "046487c754c058aa66ab892fe835fb02",
"assets/assets/svg/copy.svg": "1b3b1d466f09b31ec64a9bc396bcfe89",
"assets/assets/svg/donak.svg": "e92921c13d27e2612e1a0faac05c99ea",
"assets/assets/svg/donak_bold.svg": "9cd615da1020cfa7dcbd6231b254aac3",
"assets/assets/svg/donak_grey_border.svg": "a8c8d0a3be15ddd89d9315dc78da39d1",
"assets/assets/svg/donak_logo_bold.svg": "ed767403eb97306db36258cf8b97ac3b",
"assets/assets/svg/donak_logo_light.svg": "6f54802aefd8d3eeba8969ff554b53bf",
"assets/assets/svg/donak_logo_medium.svg": "b39456bb2d9442681767c496d5e05b68",
"assets/assets/svg/donak_logo_regular.svg": "8a41ee3e5866595cbfeef74fb59d3e2d",
"assets/assets/svg/download.svg": "a928d8172f9d6e0f43727c583efcf1af",
"assets/assets/svg/driving_offenses.svg": "2ef229e76e66dca5760d24e4d7019b30",
"assets/assets/svg/duration.svg": "4a141389f3dc7fca8e0f4f6fcfa02d61",
"assets/assets/svg/electricity.svg": "84f397dfb342902449e95cb3168e88cb",
"assets/assets/svg/eye.svg": "cf165ca34213856f76b346d657758716",
"assets/assets/svg/faq.svg": "70b670ddbb29073512127baef5e25af3",
"assets/assets/svg/gas.svg": "003154aa0978c5213907992211927f2e",
"assets/assets/svg/gift_tree.svg": "67096ca19ac65ebba99386bbacd84936",
"assets/assets/svg/gift_tree_disabled.svg": "b220578ace663c850b02ab5ab551285f",
"assets/assets/svg/home.svg": "d48c9558c09f0bd42ea127641b186d0f",
"assets/assets/svg/instagram.svg": "f679e0b4083fe1c8d53f7aee5ee4d87d",
"assets/assets/svg/instagram_black_border.svg": "23761d983ab2017b770f973e9e34d550",
"assets/assets/svg/internet_package.svg": "af8b6b77eebf175821c78771a0df8416",
"assets/assets/svg/irancell.svg": "8589148ba6bd1064f80f1f557220b05f",
"assets/assets/svg/irancell_selected.svg": "75e58f1ae5a0991073f42902735dc766",
"assets/assets/svg/location.svg": "1b518574c97709d8b71eb7b5ae2ece1d",
"assets/assets/svg/location_on_map.svg": "073c99799e81d50ecf99879691d2075e",
"assets/assets/svg/logout.svg": "924406e753b48e9c453c57764f4674bf",
"assets/assets/svg/mci.svg": "fbfbe8c77a27075bc32e27352d287ee0",
"assets/assets/svg/mci_selected.svg": "8bf1e9b4107559c691d7d4ecfa8c1c50",
"assets/assets/svg/municipality_tax.svg": "5b31508b94c37db202bdb87c42ea65ba",
"assets/assets/svg/my_bills.svg": "0e2d64ec6a901668cc9b738b76937184",
"assets/assets/svg/my_tickets.svg": "faee2a7fa0f1a8f4482e8e196d6a0fab",
"assets/assets/svg/my_trees.svg": "b79c466b0aaccdcbbf3bde5996a34503",
"assets/assets/svg/no_transactions.svg": "aa823272a9bc85241f7f5eb3ed76459d",
"assets/assets/svg/payment_id.svg": "ae3278b130ae750adb62a45bfad4a216",
"assets/assets/svg/phone.svg": "9e25acd83bd4c1e567066835aac4563f",
"assets/assets/svg/phone_bold.svg": "9b0deb300a962aac569d1e3461728a32",
"assets/assets/svg/prefix_money.svg": "6a612e11e9d0d4afec5a597524e9a495",
"assets/assets/svg/reset.svg": "9bfc95cb1c307ab7f40e91e864f3406f",
"assets/assets/svg/rightel.svg": "44b2eeda7e90efa418732debde3093d6",
"assets/assets/svg/rightel_selected.svg": "bd21fb550dd2b3b617657a4feea88abc",
"assets/assets/svg/safari_add.svg": "747118a3d9211ec879d93cc406a0eb91",
"assets/assets/svg/safari_add_to_home_screen.svg": "768f03cd0f0294bafa8eee1365b33f80",
"assets/assets/svg/safari_share.svg": "a15f239af67c26d593e709566637fed9",
"assets/assets/svg/send.svg": "668830f9c70e249b19d6bd24e16a09b5",
"assets/assets/svg/settings.svg": "ccac5e9afbcafce22963631207f6d87a",
"assets/assets/svg/site.svg": "8228fb799aff4a362c8953047c96720c",
"assets/assets/svg/success.svg": "110d77cf43ff8a45414fd405d154fb82",
"assets/assets/svg/terms_and_conditions.svg": "040e35328956b661d7583ce133eb144c",
"assets/assets/svg/time.svg": "fc35632355e7045069a49e192fd932ca",
"assets/assets/svg/transactions.svg": "4d11c530c21fd2051d0757d376f22d92",
"assets/assets/svg/tree.svg": "324f173d1a7af5ebf0b61621c4602cd9",
"assets/assets/svg/trees_history.svg": "a5c26928926e5cb399db82098ad6a33d",
"assets/assets/svg/tree_customer_name.svg": "7dae3c18fbdd3c7035cc471d2652b1a3",
"assets/assets/svg/tree_info.svg": "ffbbc48f442b3ebd4bccbbddb0a7b084",
"assets/assets/svg/tree_location.svg": "7f89a7f60ef80c389206f37ba595b03a",
"assets/assets/svg/tree_name.svg": "11e39723f6eac8a7b87f2fcbbc3205a4",
"assets/assets/svg/tree_number.svg": "35d5102931845950511a817bcaf02ffe",
"assets/assets/svg/unsuccessful.svg": "976c7310424cf158352905be3982a11b",
"assets/assets/svg/user.svg": "1366cf7b89dffc5cfbc4358d8cbb0c57",
"assets/assets/svg/users_count.svg": "4d882c35fb63cb9ff9c397a5f7a359df",
"assets/assets/svg/wait.svg": "0a3ce9a64a9164903f14aee7abaec044",
"assets/assets/svg/water.svg": "7bc09b87dae16bf3f77b56283a4c42ab",
"assets/FontManifest.json": "c1737aa218692774139817a4ff296ca8",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "9fd4162f6a208de27d5213ef565584aa",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"browser_detect.js": "394455775af081a6e15d6f74b1a7a205",
"favicon.png": "b3875ab21a1eadf94c3d2c61353c2bbf",
"icons/Icon-192.png": "7cfffecdca7592392af5c221001e571f",
"icons/Icon-512.png": "b29765bf54ef0f98e818e77c01367fa6",
"img/loading_message.png": "6bb4d940a3de9160abe7f9aa5bfe1a4e",
"img/splash_icon.png": "14d750c3e31f0800e0fb49aa19c7a87d",
"img/splash_text.png": "dad9ad74cdb9a1f76cfd5aecb5776820",
"index.html": "31755861a04b5899e04362e8b5948bf6",
"/": "31755861a04b5899e04362e8b5948bf6",
"main.dart.js": "3b90458932a1e24565ece3f642ac8a6b",
"manifest.json": "d6f5cdc08dd39892f66877d7bf1d3f65",
"sql-wasm.js": "7f12897de502e20af4cf0b8a11d6740a",
"sql-wasm.wasm": "9acb7a2acdb22234cf19be0aa2f332d0",
"stay_standalone.js": "fe997903763509cf7670c50f34448599",
"styles.css": "f9a6e41dc3896d608b0fe6688f63ae4b",
"utils.js": "f7e9d909a06b1fcf2ed121954b0b74d4",
"version.json": "9d3acffcbf10f8b1ac68fb2da716152f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
