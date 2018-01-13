const electron = require('electron');
const { app, BrowserWindow } = electron;

(function () {
    'use strict';
    var mainWindow = null;

    app.on('window-all-closed', function () {
        app.quit();
    });

    app.on('ready', function () {
        mainWindow = new BrowserWindow({
            width: 900,
            height: 700,
            center: true,
            resizable: true
        });

        mainWindow.loadURL(`file://${__dirname}/server/index.html`);
    });
})();
