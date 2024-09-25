const path = require('path');
const builder = require('electron-builder');

builder.build({

    projectDir: path.resolve(__dirname),  // 專案路徑 

    win: ['nsis', 'portable'],  // nsis . portable
    config: {
        "appId": "com.andrewdeveloper.electron.kuru",
        "productName": "咕嚕咕嚕(〜￣▽￣)〜",
        "directories": {
            "output": "build/win"
        },
        "win": {
            "icon": path.resolve(__dirname, './assets/image/kurukuru.png'),
        }
    },
})
    .then(
        data => console.log(data),
        err => console.error(err)
    );