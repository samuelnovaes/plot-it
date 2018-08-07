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
})()
