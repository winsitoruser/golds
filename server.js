// /home/sourorit/nextapp/server.js
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

// Pastikan dev = false
const app = next({ dev: false })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    // Parse URL (Passenger kirim path asli, misal: /_next/... atau /about)
    const parsedUrl = parse(req.url, true)
    handle(req, res, parsedUrl)
  }).listen(0, () => {
    // Passenger akan inject PORT, jadi kita listen di 0 (assign otomatis)
    console.log('> Server ready')
  })
})