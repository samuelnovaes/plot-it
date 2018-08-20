(function () {
	const Plotly = require('plotly.js')
	const div = document.getElementById('plot')
	const chokidar = require('chokidar')
	const remote = require('electron').remote
	const watcher = chokidar.watch(process.cwd())

	function plot(){
		delete require.cache[require.resolve(process.cwd())]
		Plotly.newPlot(
			div,
			require(process.cwd()),
			{
				dragmode: 'pan',
				yaxis: {
					scaleanchor: 'x'
				}
			},
			{
				displayModeBar: true,
				scrollZoom: true,
				displaylogo: false
			}
		)
	}

	window.onresize = () => {
		Plotly.relayout(div, {
			width: innerWidth,
			height: innerHeight
		})
	}

	window.onkeyup = e => {
		if(e.key === 'F12') remote.getCurrentWindow().openDevTools()
	}

	watcher.on('change', () => {
		plot()
	})

	plot()
})()
