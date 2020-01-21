const {app, BrowserWindow, Menu, screen} = require('electron');

function createWindow (){
  const {width, height} = screen.getPrimaryDisplay().workAreaSize;
  // Stwórz okno przeglądarki.
  let mainWin = new BrowserWindow({
    width: Math.floor(width/1.3),
    height: Math.floor(height/1.07),
    resizable: false,
    transparent: true,
    background: '#2f2f2f',
    frame: false,
    title: "Link Player",
    webPreferences: {
      nodeIntegration: true
    }
  });
  mainWin.loadURL("file://"+__dirname+"/templates/main.html");
}

app.on('ready', createWindow)
