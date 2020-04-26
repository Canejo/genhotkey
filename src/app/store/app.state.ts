import HotkeyState from './hotkey/hotkey.state';
import FolderState from './folder/folder.state';

export interface AppState {
  hotkey: HotkeyState;
  folder: FolderState;
}
