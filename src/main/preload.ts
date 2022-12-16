import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';

export type Channels = 'minimize' | 'close';

contextBridge.exposeInMainWorld('nativeFunctions', {
  minimize: () => ipcRenderer.send('minimize'),
  close: () => ipcRenderer.send('close'),
});

//  ipcRenderer: {
//    sendMessage(channel: Channels, args: unknown[]) {
//      ipcRenderer.send(channel, args);
//    },
//    on(channel: Channels, func: (...args: unknown[]) => void) {
//      const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
//        func(...args);
//      ipcRenderer.on(channel, subscription);
//
//      return () => {
//        ipcRenderer.removeListener(channel, subscription);
//      };
//    },
//    once(channel: Channels, func: (...args: unknown[]) => void) {
//      ipcRenderer.once(channel, (_event, ...args) => func(...args));
//    },
//  },
//
