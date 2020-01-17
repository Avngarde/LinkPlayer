const {app, BrowserWindow, Menu, screen} = require('electron');
const path = require('path');

function createWindow (){
  const {width, height} = screen.getPrimaryDisplay().workAreaSize;
  // Stwórz okno przeglądarki.
  let mainWin = new BrowserWindow({
    width: Math.floor(width/1.5),
    height: Math.floor(height/1.3),
    resizable: false,
    frame: true,
    title: "Link Player",
    webPreferences: {
      nodeIntegration: true
    }
  });
  mainWin.loadURL(path.resolve('./templates/main.html'));
}

app.on('ready', createWindow);