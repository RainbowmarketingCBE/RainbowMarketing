'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/c12.jpg": "f15147509f24a65347994589bce2b4b2",
"assets/assets/images/04.jpg": "516da0ec9c404a550db5387047b12398",
"assets/assets/images/c2combine.jpg": "3b0c36d7876a83debf96ee2b7ce102dc",
"assets/assets/images/choco8.jpg": "ba11413e1f5f1d075ff90d72b29a09c3",
"assets/assets/images/c10.jpg": "62668d648167eae94c318e758a79d473",
"assets/assets/images/ksCover.jpg": "71b60695deabb0e853f88d8c864c6a89",
"assets/assets/images/c3combine.jpg": "0a57cf39bb75c4f0f414722e2ca848be",
"assets/assets/images/c4.jpg": "698519ee753e55197d9e5d86df741aff",
"assets/assets/images/03.jpg": "651c354e07762523953f58b2f238e023",
"assets/assets/images/c6.jpg": "bbce1572427e2d9a3e25cab7ebad5ca8",
"assets/assets/images/c11.jpg": "0b4630e69a5546804f1e79d996668e43",
"assets/assets/images/c8.jpg": "6bba999fde9bc8ace241e89604cc4aff",
"assets/assets/images/c1combine.jpg": "da11e989515c2779acd717f03c69ca67",
"assets/assets/images/choco3.jpg": "5b80f52d55faae5dfcde45ad06782357",
"assets/assets/images/choco6.jpg": "ebd2ea7509889c05b483c4cce1de941c",
"assets/assets/images/choco2.jpg": "fe333f2088a6369568112b6874846c41",
"assets/assets/images/01.jpg": "0e3d3b6a779a1cdde86a071f3d2a3f29",
"assets/assets/images/02.jpg": "b537d5c86ca26ffe71eef9e30557c1d6",
"assets/assets/images/c7.jpg": "d9d5330dffa2faf5a7ece639d9697d04",
"assets/assets/images/choco5.jpg": "2c39c0bec2e9ff783e8ae0a5b90cbff9",
"assets/assets/images/choco7.jpg": "08adf452e53795f3ccb13997e34d3d1a",
"assets/assets/images/c2.jpg": "90cf46f43a11d6826fa76e4f747e5689",
"assets/assets/images/c5.jpg": "fcc51107be625011e6f635f4a496cada",
"assets/assets/images/c3.jpg": "e0d677eb1663b30251fad1008ea8dd31",
"assets/assets/images/logo.png": "f25cd56d5495eed3b6d6552bfede83d3",
"assets/assets/images/c1.jpg": "cb1a1457d92c2bce1ec60ddd844c2cb6",
"assets/assets/images/choco4.jpg": "76edc534c964394c93fc9c22149bc132",
"assets/assets/images/07.jpg": "aac7d4d854c097bbb6338d8f634de954",
"assets/assets/images/c4combine.jpg": "6efe10225f0d2868430d0da3a5d0c607",
"assets/assets/images/05.jpg": "e8bdf79cb9005f41633f1d0069cf494c",
"assets/assets/images/06.jpg": "eebc78aeeb6461da7ca9e001184ca785",
"assets/assets/images/chocoOne.jpg": "a7b9a473f25e1e5a5b72b9296d99e919",
"assets/assets/images/c9.jpg": "5c03cb2d496502d69d5df38e1b2e1347",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/AssetManifest.json": "b984df4a6d7e6d4b48655c24f47f1ce2",
"assets/NOTICES": "4b0f5161850f62f009a4afc1a1f4f4a5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"manifest.json": "52b7f1da1476d5e9483c6df8ad60b99f",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"index.html": "a8f3b696b4a8bc200c7daf2bc2c3f36f",
"/": "a8f3b696b4a8bc200c7daf2bc2c3f36f",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"main.dart.js": "3e9d0a2042bcddd22afba0ac009deb02",
"version.json": "fc1ac3dd4464ff5405f82e3788cb75a2",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
