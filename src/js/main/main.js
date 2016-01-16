import path from 'path';

import app from 'app';
import CrashReporter from 'crash-reporter';
import BrowserWindow from 'browser-window';

let mainWindow = null;
CrashReporter.start();


/**
 * Main
 */
function run() {
  global.DEBUG = true;

  const filePath = path.join(__dirname, 'index.html');

  mainWindow = new BrowserWindow({height: 600, width: 800});
  mainWindow.loadUrl(`file://${filePath}`);
  if (global.DEBUG) {
    mainWindow.toggleDevTools();
  }
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', () => run());
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
