(function () {
	const Plotly = require('plotly.js')
	const decache = require('decache')
	const chokidar = require('chokidar')
	const remote = require('electron').remote
	const div = document.getElementById('plot')
	const watcher = chokidar.watch(process.cwd())

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

	Plotly.newPlot(div, require(process.cwd()), layout, options)

	window.onresize = () => {
		Plotly.relayout(div, {
			width: innerWidth,
			height: innerHeight
		})
	}

	window.onkeyup = e => {
		if (e.key === 'F12') remote.getCurrentWindow().openDevTools()
	}

	watcher.on('change', () => {
		decache(process.cwd())
		Plotly.react(div, require(process.cwd()), layout)
	})
})()
