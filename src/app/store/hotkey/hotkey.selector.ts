import { createSelector } from '@ngrx/store';

import { AppState } from '../app.state';
import HotkeyState from './hotkey.state';

export const selectHotkey = (state: AppState) => state.hotkey;

export const selectListHotkey = createSelector(selectHotkey, (state: HotkeyState) => state.Hotkeys);
