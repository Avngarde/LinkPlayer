const {app, BrowserWindow, Menu, screen} = require('electron');

function createWindow () {
  const {width, height} = screen.getPrimaryDisplay().workAreaSize;
  // Stwórz okno przeglądarki.
  let mainWin = new BrowserWindow({
    width: Math.floor(width/3),
    height: Math.floor(height/1.5),
    resizable: false,
    title: "Link Player",
    backgroundColor: "#2f2f2f",
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWin.setMenu(null);

  // and load the index.html of the app.
  Menu.setApplicationMenu(null);
  mainWin.loadFile('index.html')
}

app.on('ready', createWindow)