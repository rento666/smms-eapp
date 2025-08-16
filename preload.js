const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  minimizeWindow: () => ipcRenderer.send('minimize-window'),
  toggleMaximizeWindow: () => ipcRenderer.send('toggle-maximize-window'),
  closeWindow: () => ipcRenderer.send('close-window'),
  openSmmsWebsite: () => ipcRenderer.send('open-smms-website')
});

window.addEventListener('DOMContentLoaded', () => {
  // Preload script for security and initialization
});