// const { app, BrowserWindow, ipcMain } = require('electron')
// const path = require('node:path')

// const createWindow = () => {
//     const win = new BrowserWindow({
//         width: 800,
//         height: 600,
//         webPreferences: {
//             preload: path.join(__dirname, 'preload.js')
//         }
//     })

//     win.loadFile('src/pages/index.html')
// }

// app.whenReady().then(() => {
//     ipcMain.handle('ping', () => 'pong')
//     createWindow()
// })

// app.on('window-all-closed', () => {
//     if (process.platform !== 'darwin') app.quit()
// })


const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  win.loadFile('src/pages/index.html')
}

app.whenReady().then(createWindow)
