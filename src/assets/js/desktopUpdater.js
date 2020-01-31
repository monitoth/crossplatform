var desktopUpdater = (function(){
    const { ipcRenderer } = require('electron');
    var version = document.getElementById('version');
    var notification = document.getElementById('notification');
    var message = document.getElementById('message');
    var restartButton = document.getElementById('restart-button');

    ipcRenderer.send('app_version');
    ipcRenderer.on('app_version', (event, arg) => {
      ipcRenderer.removeAllListeners('app_version');
      version.innerText = 'Version ' + arg.version;
    });

    ipcRenderer.on('update_available', () => {
      ipcRenderer.removeAllListeners('update_available');
      message.innerText = 'A new update is available. Downloading now...';
      notification.classList.remove('hidden');
    });
    ipcRenderer.on('update_downloaded', () => {
      ipcRenderer.removeAllListeners('update_downloaded');
      message.innerText = 'Update Downloaded. It will be installed on restart. Restart now?';
      restartButton.classList.remove('hidden');
      notification.classList.remove('hidden');
    });
})

// Handles closing the notification
var closeNotification = (function(){
  notification.classList.add('hidden');
})

// Handles restarting the app to immediately install the downloaded update
var restartApp = (function(){
  const { ipcRenderer } = require('electron');
  ipcRenderer.send('restart_app');
})