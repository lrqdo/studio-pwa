self.addEventListener("install", event => {
  event.waitUntil(
    caches
      .open("my-cache")
      .then(cache => {
        return cache.addAll(["/index.html", "main.js", "styles.css"]);
      })
      .then(res => {
        return res;
      })
      .catch(error => {
        return error;
      })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});
