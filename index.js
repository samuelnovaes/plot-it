const { app, BrowserWindow } = require('electron')
const path = require('path')

app.on('ready', () => {
	const win = new BrowserWindow({
		title: 'Plot It',
		icon: path.join(__dirname, 'src', 'favicon.png'),
		show: false
	})
	win.setMenu(null)
	win.loadFile(path.join(__dirname, 'src', 'index.html'))
	win.on('ready-to-show', () => {
		win.show()
	})
})

app.on('window-all-closed', () => {
	app.quit()
})
