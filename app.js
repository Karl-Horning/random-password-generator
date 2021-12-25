const {
    app,
    BrowserWindow
} = require('electron')

let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 600,
        height: 600,
        minWidth: 600,
        minHeight: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    })

    mainWindow.loadFile('./views/index.html')

    mainWindow.on('closed', () => {
        mainWindow = null
    })
}

// Create window when app is ready
app.on('ready', createWindow)

// Quit app when all windows are closed in Windows and Linux
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

// Recreate the BrowserWindow on macOS when the app is 
// running and the icon is clicked
app.on('activate', () => {
    if (mainWindow === null) createWindow()
})