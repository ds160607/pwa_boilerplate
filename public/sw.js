const cacheName = 'v1'

// список урлов для кеширования при установке service worker
const preCache = [
  '/'
]

self.addEventListener('install', event => {
  console.log('install')
  const cachePromises = caches.open(cacheName)
    .then(cache =>
      cache.addAll(preCache)
    )
  event.waitUntil(
    Promise.all(cachePromises)
      .then(() => self.skipWaiting())
  )
})

self.addEventListener('activate', event => {
  console.log(`Activate ${cacheName}`)
  event.waitUntil(
    clients.claim()
  )
})

/**
 * Если в урле встречается хотя бы одна строка, которая входит в массив restricted,
 * то этот запрос не будет обрабатываться service worker-ом
 * @param {Request} request
 * @returns {boolean}
 */
function shouldHandleFetch(request) {
  const { href } = new URL(request.url)
  const restricted = [
    'api',
    '.json'
  ]
  return restricted.reduce(
    (memo, fragment) => memo || href.includes(fragment),
    false
  )
}

/**
 * Положить в кеш, если ответ не 400-я или 500-я
 * @param {Request} request
 * @param {Response} response
 */
function cacheTo(request, response) {
  response.ok && caches.open(cacheName).then(cache =>
    cache.put(request, response)
  )
  return response.clone()
}

self.addEventListener('fetch', event => {
  console.log('fetch')
  const request = event.request

  if (!shouldHandleFetch(request)) return

  event.respondWith(
    caches.match(request)
      .then(response => response || fetch(request).then(response =>
        cacheTo(request, response)
      ))
  )
})