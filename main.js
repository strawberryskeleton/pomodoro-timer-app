const { app, BrowserWindow } = require('electron')

function createWindow () {
    const win = new BrowserWindow({
        width: 500,
        height: 700,
    })

    win.loadFile('index.html')

    win.webContents.openDevTools();
}

app.whenReady().then(createWindow)