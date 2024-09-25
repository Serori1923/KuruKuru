const { app, BrowserWindow } = require('electron')
const path = require('node:path')
const createWindow = () => {
    const win = new BrowserWindow({
        width: 130,
        height: 130,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        },
        frame: false,          // 標題列不顯示
        transparent: true,     // 背景透明
        titleBarStyle: 'hidden',
        icon: path.join(__dirname, './assets/image/kurukuru.png')
    })
    win.setAlwaysOnTop(true, "screen-saver")
    win.setVisibleOnAllWorkspaces(true)
    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})