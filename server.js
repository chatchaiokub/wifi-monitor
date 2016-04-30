const scanner = require('node-wifi-scanner')
var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use(bodyParser.json())

setInterval(function () {
  scanner.scan((err, networks) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(networks)
    app.get('/data', function (req, res) {
      res.send(networks)
    })
  })
}, 5000)

app.use(express.static('public'))

app.set('port', (process.env.PORT || 3000))

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'))
})
