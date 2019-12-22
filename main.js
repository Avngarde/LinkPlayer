const {app, BrowserWindow, Menu, screen} = require('electron');
const path = require('path');

function createWindow () {
  const {width, height} = screen.getPrimaryDisplay().workAreaSize;
  // Stwórz okno przeglądarki.
  let mainWin = new BrowserWindow({
    width: Math.floor(width/1.9),
    height: Math.floor(height/1.1),
    resizable: true,
    title: "Link Player",
    backgroundColor: "#2f2f2f",
    webPreferences: {
      nodeIntegration: true
    }
  });

  // and load the index.html of the app.
  mainWin.loadURL(path.resolve('./templates/main.html'));
}

app.on('ready', createWindow);