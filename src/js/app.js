console = require('console');

(function () {
	const Plotly = require('plotly.js')
	const decache = require('decache')
	const path = require('path')
	const { remote } = require('electron')
	const watcher = require('./js/watcher')
	const div = document.getElementById('plot')
	const error = document.getElementById('error')
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

	const replot = () => {
		decache(process.cwd())
		if (error.open) error.close()
		try {
			Plotly.newPlot(div, require(process.cwd()), layout)
		}
		catch (err) {
			showError(err)
		}
	}

	const showDataTable = () => {
		const win = new remote.BrowserWindow({
			title: 'Data Table',
			icon: path.join(__dirname, 'img', 'favicon.png'),
			parent: remote.getCurrentWindow(),
			modal: true,
			show: false
		})
		win.setMenu(null)
		win.loadFile(path.join(__dirname, 'table.html'))
		win.on('ready-to-show', () => {
			win.show()
		})
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

	window.onkeydown = e => {
		switch (e.key) {
			case 'F5':
				replot()
				break
			case 'F12':
				showDataTable()
				break
		}
	}

	watcher.on('change', replot)
})()
