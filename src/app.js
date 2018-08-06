(function () {

	const Plotly = require('plotly.js')
	const div = document.getElementById('plot')
	const remote = require('electron').remote
	const data = require(remote.process.argv[2])

	Plotly.newPlot(div, data, { dragmode: 'pan' }, {
		displayModeBar: true,
		scrollZoom: true,
		displaylogo: false
	})

	window.onresize = () => {
		Plotly.relayout(div, {
			width: innerWidth,
			height: innerHeight
		})
	}

	window.onkeydown = e => {
		switch (e.key) {
			case 'F5':
				history.go(0)
				break
			case 'F12':
				remote.getCurrentWindow().openDevTools()
				break
		}
	}

})()