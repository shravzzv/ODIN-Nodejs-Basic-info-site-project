const http = require('http')
const fs = require('fs')

http
  .createServer((req, res) => {
    const path = req.url === '/' ? './index.html' : `.${req.url}.html`

    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        fs.readFile('./404.html', (_, data) => res.end(data))
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(data)
      }
    })
  })
  .listen(3000, () => console.log('server running on http://localhost:3000'))
