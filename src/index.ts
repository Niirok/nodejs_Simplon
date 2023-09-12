import "dotenv/config"

console.log("env", process.env.NAME)

import express from 'express'
import path from "path"
import { rootCertificates } from "tls"
const app = express()
const port = 8878

app.use(express.static('public'))

app.get('/toto', (req, res) => {
  res.send('Hello World!')
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/tata', (req, res) => {
  res.send("wéwéwé")
})

app.get('/random-between/:min/:max', (req, res) => {
  const min = parseInt(req.params.min)
  const max = parseInt(req.params.max)
  const random = Math.floor(Math.random() * (max - min + 1)) + min
  res.send(random.toString())
})

// Create a route who return the image on /public/image.jpg
app.get('/simplon/logo', (req, res) => {
  res.sendFile('logo.png', { root: path.resolve(__dirname, "../public")})
})

app.get('/simplon/web', (req, res) => {
  res.sendFile('index.html', { root: path.resolve(__dirname, "../public")})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})