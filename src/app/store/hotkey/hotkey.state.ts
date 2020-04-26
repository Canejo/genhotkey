import { Hotkey } from './hotkey.model';

export default class HotkeyState {
  hotkeys: Array<Hotkey>;
  selectedHotkeys: Array<Hotkey>;

  error: Error;
}

export const initializeState = (): HotkeyState => {
  return {
    hotkeys: Array<Hotkey>(),
    selectedHotkeys: Array<Hotkey>(),

    error: null,
  };
};
