# PlotServer
Render advanced charts in browser. PlotServer uses [plotly.js](https://plot.ly/javascript/).

# Install

`npm i plotserver`

# Usage
```javascript
plot(data, port, callback)
```

# Demo
```javascript
const plot = require('plotserver')

const data1 = {
	x: ['A', 'B', 'C', 'D'],
	y: [1, 2, 3, 4],
	type: 'bar',
	name: 'Data 1'
}

const data2 = {
	x: ['A', 'B', 'C', 'D'],
	y: [2, 4, 6, 8],
	type: 'bar',
	name: 'Data 2'
}

plot([data1, data2], 5000, () => {
	console.log('Running on port 5000')
})
```

Visit http://localhost:5000 in your browser, and you will see that.

![image](https://raw.githubusercontent.com/samuelnovaes/plotserver/master/screenshot.png)

# [Reference](https://plot.ly/javascript/reference/)