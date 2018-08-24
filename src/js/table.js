const vm = new Vue({
	el: '#app',
	data: {
		charts: [],
		chart: null,
		errorMessage: '',
		error: false
	},
	mounted() {
		const watcher = require('./js/watcher')
		const decache = require('decache')
		this.chart = 0

		const update = () => {
			try {
				this.charts = require(process.cwd())
			}
			catch (err) {
				this.$refs.error.innerText = err.stack
				this.error = true
			}
		}

		const refresh = () => {
			this.error = false
			decache(process.cwd())
			update()
			if (!this.charts[this.chart]) this.chart = 0
		}

		update()

		watcher.on('change', refresh)

		window.onkeydown = e => {
			if (e.key === 'F5') refresh()
		}
	}
})