import { Channels } from 'main/preload';

declare global {
  interface Window {
    nativeFunctions: {
      minimize: () => void;
      maxRest: () => void;
      close: () => void;
    };
  }
}

export {};
