const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Stwórz okno przeglądarki.
  let win = new BrowserWindow({
    width: 500,
    height: 600,
    icon: './public/images/icon.png',
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      'subpixel-font-scaling': false,
    }
  })
  // and load the index.html of the app.
  win.loadFile('templates/index.html')
}

app.whenReady().then(createWindow)