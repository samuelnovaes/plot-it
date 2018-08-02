var div = document.getElementById('plot');
var loader = document.getElementById('loader-dialog');

axios.get('/data').then(function (response) {
	Plotly.plot(div, response.data, null, {
		displayModeBar: true,
		scrollZoom: true,
		displaylogo: false
	});
	loader.close();
});