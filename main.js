const {app, BrowserWindow, Menu} = require('electron');

function createWindow () {
  // Stwórz okno przeglądarki.
  let mainWin = new BrowserWindow({
    width: 600,
    height: 700,
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