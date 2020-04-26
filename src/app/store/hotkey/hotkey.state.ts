import { HotkeyCollection } from './hotkey.collection';

export default class HotkeyState {
  Hotkeys: Array<HotkeyCollection>;
  Error: Error;
}

export const initializeState = (): HotkeyState => {
  return { Hotkeys: Array<HotkeyCollection>(), Error: null };
};
