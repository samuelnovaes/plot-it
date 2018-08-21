# Plot It
Render advanced charts using Node.js. Plot It uses [plotly.js](https://plot.ly/javascript/).

### With hot reload!

# Install

`npm i -g plot-it`

# Demo (Using [Lodash](https://lodash.com/) to create range)

- Create a directory for your project
- Run `npm init -y`
- Run `npm i lodash`
- Create an index.js file

```javascript
const _ = require('lodash')

const f = x => Math.sin(x)
const g = x => x ** 2
const range = _.range(-10, 10, 0.1)

module.exports = [
	{
		x: range,
		y: range.map(f),
		name: 'f(x) = sin(x)'
	},
	{
		x: range,
		y: range.map(g),
		name: 'f(x) = x²'
	}
]
```

- Run `plot-it`

![image](https://raw.githubusercontent.com/samuelnovaes/plot-it/master/screenshot.png)

# Debug
Press F12 to open DevTools

# [Reference](https://plot.ly/javascript/reference/)
