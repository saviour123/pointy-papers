"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","3171902f9df02273b775c6ac9718dc74"],["static/css/main.c19e73fa.css","8722dd8b5215983ae513de43e70e0b36"],["static/js/main.6f20b099.js","d979bacfa4abae76312e08014b7500a7"],["static/media/PP-logo.db1a17a7.png","db1a17a77ff440f2ce558daaab3cecdb"],["static/media/PP1-GalaxyS8.a2f99383.png","a2f993834b5896cb15008c945c73ccb0"],["static/media/PP1-HD.cd06a4f8.png","cd06a4f881e78a836a80e7be182db20f"],["static/media/PP1-M.634e13cf.png","634e13cfe455357e3d6172d35983d84a"],["static/media/PP1-Smartphone.3aa60ae3.png","3aa60ae3fcc5aa500158ac3a5d57f326"],["static/media/PP1-Twitter.02ebdb9b.png","02ebdb9b74869cbff91c111449ed7be8"],["static/media/PP2-GalaxyS8.173fa72a.png","173fa72a577b8fefe65436140af16c64"],["static/media/PP2-HD.66d1452e.png","66d1452e21b7f7ec074d5a541e98ed53"],["static/media/PP2-M.0649754d.png","0649754de6811f8f186edc7e378fc4cf"],["static/media/PP2-Smartphone.d6f976eb.png","d6f976ebe2bb075ecafedec4bdb25220"],["static/media/PP2-Twitter.204350b7.png","204350b7edb3057484336f3ecd89762e"],["static/media/PP3-GalaxyS8.dc0a2536.png","dc0a2536e21632882c1da8ff6f673496"],["static/media/PP3-HD.ff2cf7ea.png","ff2cf7ead3ae00569653930f1223b934"],["static/media/PP3-M.2421f088.png","2421f088b7a9d0749bd2035e0257ed43"],["static/media/PP3-Smartphone.4f99009f.png","4f99009fbb649c47ef0e7717d4166cf1"],["static/media/PP3-Twitter.cc8b0afd.png","cc8b0afd953752ab39bcbbb8ed103985"],["static/media/PP4-GalaxyS8.fe8e01bf.png","fe8e01bffc75c73ae0cce07c8ac452f7"],["static/media/PP4-HD.30e93661.png","30e93661434ba20504b417917658fd78"],["static/media/PP4-M.537483cd.png","537483cdd99ee5979f4801c91cf7f626"],["static/media/PP4-MacBook.42927007.png","42927007b17d22af82fd525cc7e2f20b"],["static/media/PP4-Smartphone.db4ade3d.png","db4ade3dfe34c0460ed849263fd56b84"],["static/media/PP4-Tablet.f9e6e54a.png","f9e6e54a074305264cdc6d90069b5fca"],["static/media/PP4-Twitter.7e796375.png","7e7963758808223724b8e386325e8c24"],["static/media/PP4-UltraWide.d1539ec2.png","d1539ec2b491bda404ee3ab7146a324e"],["static/media/PP5-GalaxyS8.bdf01fbb.png","bdf01fbba2075c20d324da1ad1c4cd3d"],["static/media/PP5-HD.f00573e2.png","f00573e23815bce2ebf6e3c187605690"],["static/media/PP5-M.cdf15940.png","cdf15940c2eeb15766cc23e0250ab4ad"],["static/media/PP5-Smartphone.21515159.png","2151515935540e8946777c060ce9f82b"],["static/media/PP5-Twitter.4a573992.png","4a573992bc97090f050d60c522cc4d38"],["static/media/PP6-GalaxyS8.e09dd618.png","e09dd6186251500c088d798bb6942ad4"],["static/media/PP6-HD.c28401c3.png","c28401c3f42a9c584993db3eadce2273"],["static/media/PP6-M.53bb2db8.png","53bb2db8d652de7096b38cd9db3d6a2b"],["static/media/PP6-Smartphone.cfd3ad0a.png","cfd3ad0ad093f2a66530101b979a287d"],["static/media/PP6-Twitter.554282a4.png","554282a4e743499bc24bd39138a78379"],["static/media/PP7-GalaxyS8.4b9721e1.png","4b9721e1fbffcbbc33c12379e05185c7"],["static/media/PP7-HD.da6c2d26.png","da6c2d2674bee3ad3f08391b555520ae"],["static/media/PP7-M.cc60d798.png","cc60d7986134bfdf7e649c50652121fd"],["static/media/PP7-Smartphone.d44b7d0b.png","d44b7d0bce5281cf27b2669b8238400e"],["static/media/PP7-Twitter.c0264944.png","c02649449aa85645c50271d953080e8b"],["static/media/PP8-GalaxyS8.67922f86.png","67922f86eed150c19bb47bbf658082fe"],["static/media/PP8-HD.a452056d.png","a452056d957644621677478b6989e2cd"],["static/media/PP8-M.9b263441.png","9b26344180539adfaec355b52ae9d694"],["static/media/PP8-Smartphone.ff66aa0a.png","ff66aa0aa3c8d580cd6d851a0483941a"],["static/media/PP8-Twitter.27c8926e.png","27c8926eacc848bca5edf9dd1f566cf1"],["static/media/arrow.8dc03bc1.svg","8dc03bc1fbe0d1db0d3a9478a633674a"],["static/media/thumbEmoji.644c1411.png","644c1411428ccf5c88f255358140ab44"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);a=urlsToCacheKeys.has(t);a||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});