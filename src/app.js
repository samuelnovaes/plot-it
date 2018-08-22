console = require('console');

(function () {
	const Plotly = require('plotly.js')
	const decache = require('decache')
	const chokidar = require('chokidar')
	const remote = require('electron').remote
	const div = document.getElementById('plot')
	const error = document.getElementById('error')
	const watcher = chokidar.watch(process.cwd(), { ignored: ['**/node_modules/**', '**/package.json', '**/package-lock.json'] })
	const { warn } = console

	console.warn = (...args) => {
		/^%cElectron Security Warning/.test(args[0]) || Reflect.apply(warn, console, args)
	}

	const layout = {
		dragmode: 'pan',
		xaxis: {
			scaleanchor: 'y'
		}
	}

	const options = {
		displayModeBar: true,
		scrollZoom: true,
		displaylogo: false
	}

	const showError = err => {
		error.innerText = err.stack
		error.showModal()
	}

	try {
		Plotly.newPlot(div, require(process.cwd()), layout, options)
	}
	catch (err) {
		showError(err)
	}

	window.onresize = () => {
		Plotly.relayout(div, {
			width: innerWidth,
			height: innerHeight
		})
	}

	window.onkeyup = e => {
		if (e.key === 'F5') history.go(0)
	}

	watcher.on('change', () => {
		decache(process.cwd())
		if (error.open) error.close()
		try {
			Plotly.newPlot(div, require(process.cwd()), layout)
		}
		catch (err) {
			showError(err)
		}
	})
})()
