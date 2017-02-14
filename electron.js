const {app, BrowserWindow} = require('electron')

const path = require('path')
const url = require('url')

// -------------------------------------------------------------
// App.
// -------------------------------------------------------------

let mainWindow = null

function createWindow () {
  mainWindow = new BrowserWindow({width: 800, height: 600})
  mainWindow.loadURL(getLaunchURL())
  mainWindow.webContents.openDevTools()
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

// -------------------------------------------------------------
// Helpers.
// -------------------------------------------------------------

function getLaunchURL () {
  // In development, we provide the loadURL ourself via an env var.
  // It should be "http://locahost:3000", or the address used by
  // create-react-app.
  // In production, we use a normal file, builded with create-react-app.
  return process.env.ELECTRON_URL || url.format({
    pathname: path.join(__dirname, 'build/index.html'),
    protocol: 'file:',
    slashes: true
  })
}
