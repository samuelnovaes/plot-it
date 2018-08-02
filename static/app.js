var div = document.getElementById('plot');

axios.get('/data').then(function (response) {
	Plotly.plot(div, response.data, null, {
		displayModeBar: true,
		scrollZoom: true,
		displaylogo: false
	});
});