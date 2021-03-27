self.addEventListener('install', e =>{
    // console.log("Install",e);
    e.waitUntill(
        caches.open("static").then(cache => {
                return cache.addAll(
                    "./",
                    "style.css",
                    "icon/android-icon-192x192-dunplab-manifest-42526.jpg"
                    )
            }
        )
    )
})
//Fetch
self.addEventListener("fetch", e => {
    console.log(`Intersect fetch request for: ${e.request.url}`);
    // e.respondWith(
    //     caches.match(e.request).then(response=>{
    //         return response || fetch(e.request);
    //     })
    // )
})

//second method ovi
    // var app='v1.00';

    // var files=[
    //     "./",
    //     "index.html",
    //     "style.css",
    //     "icon/android-icon-192x192-dunplab-manifest-42526.jpg"
    // ]

    //     //Install
    // self.addEventListener('install', event =>{
    //     // console.log("Install",e);
    //     event.waitUntill(
    //         caches.open("app")
    //         .then(cache => {
    //             return cache.addAll(files)
    //             .catch(error => {
    //                 console.error("Error adding files to", error);
    //             })
    //             })
    //     )
    //     console.info('SW Installed');
    //     // self.skipWaiting();
    // })

    //   //Activate
    // self.addEventListener('activate', event=>{
    //     event.waitUntill(
    //     caches.keys()
    //     .then(cacheName=>{
    //         return Promise.all(
    //             cacheName.map(cache=>{
    //                 if(cache !== app){
    //                     console.info("Deleting Old Cache", cache);
    //                     return caches.delete(cache);
    //                 }
    //             })
    //         )
    //     })
    // )
    // // return self.clients.claim();
    // })  

    //   ///Fetch
    // self.addEventListener('fetch',event => {
    //     console.info("SW fetch",event.request.url);
    //     event.respondWith(
    //         caches.match(event.request)
    //         .then(response => {
    //             return response || fetch(event.request);
    //         })
    //     )
    // })