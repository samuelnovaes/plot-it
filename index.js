const express = require('express')
const compression = require('compression')
const serveStatic = require('serve-static')
const path = require('path')

module.exports = (data, port, cb) => {
	const app = express()
	app.use(compression())
	app.use(serveStatic(path.join(__dirname, 'static')))
	app.get('/data', (req, res) => {
		res.json(data)
	})
	app.listen(port, cb)
}