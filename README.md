# Plot It
Render advanced charts using Node.js. Plot It uses [plotly.js](https://plot.ly/javascript/).

## News! Now with hot reload!

# Install

`npm i -g plot-it`

# Demo
Create a directory with the index.js file like this
```javascript
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

module.exports = [data1, data2]
```

Enter the directory and run the `plot-it` command, and you will see it.

![image](https://raw.githubusercontent.com/samuelnovaes/plot-it/master/screenshot.png)

# Degug
Press F12 to open DevTools.

# [Reference](https://plot.ly/javascript/reference/)
