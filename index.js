const express = require('express')
const fs = require('fs')

const app = express()

const getResponse = (res, path) =>
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' })
      fs.readFile('./404.html', (_, data) => res.end(data))
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.end(data)
    }
  })

app.get('/', (req, res) => getResponse(res, './index.html'))
app.get('/about', (req, res) => getResponse(res, './about.html'))
app.get('/contact-me', (req, res) => getResponse(res, './contact-me.html'))

app.listen(3000, () => console.log('server running on http://localhost:3000'))
