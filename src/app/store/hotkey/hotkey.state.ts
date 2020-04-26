import { HotkeyCollection } from './hotkey.collection';
import { Hotkey } from './hotkey.model';

export default class HotkeyState {
  hotkeys: Array<HotkeyCollection>;
  selectedHotkeys: Array<Hotkey>;

  error: Error;
}

export const initializeState = (): HotkeyState => {
  return {
    hotkeys: Array<HotkeyCollection>(),
    selectedHotkeys: Array<Hotkey>(),

    error: null,
  };
};
