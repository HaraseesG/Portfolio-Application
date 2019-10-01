const {app, BrowserWindow} = require ('electron');
const url = require('url');
const path = require('path');


let win;

function createWindow(){
	win = new BrowserWindow({
		frame: false,
		webPreferences: {
			plugins: true
		}
	});

	win.maximize();
	win.loadURL(`file://${__dirname}/index.html`);

	win.on('closed', () => {
		win = null;
	})
}

app.on('ready', createWindow);