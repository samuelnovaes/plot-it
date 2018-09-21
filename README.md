# Plot It
Plot advanced charts in Node.js. Plot It uses [plotly.js](https://plot.ly/javascript/).

### With hot reload!

# Install

`npm i -g plot-it`

# Demo (Using [safe-range](https://github.com/samuelnovaes/safe-range) to create range)

- Create a directory for your project.
- Run `npm init -y`.
- Run `npm i safe-range`.
- Create an index.js file.

```javascript
const range = require('safe-range')
const r = range(-10, 10, 0.1)

//Functions
const f = x => Math.sin(x)
const g = x => x ** 2

module.exports = [
	{
		x: r,
		y: r.map(f),
		name: 'f(x) = sin(x)'
	},
	{
		x: r,
		y: r.map(g),
		name: 'g(x) = x²'
	}
]
```

- Run `plot-it`.

![image](https://lh3.googleusercontent.com/u/0/d/16bKGZN3c8P7ff3yJOeubmMdkpRWMUruG=s1600-k-iv2)

> Press F5 to force refresh if necessary.

> Press F12 to show data table

![image](https://lh3.googleusercontent.com/u/0/d/1S5cvh26qxEnCB7L_c6sjHlWjjIpXVL6e=s1600-k-iv2)

# [Reference](https://plot.ly/javascript/reference/)
