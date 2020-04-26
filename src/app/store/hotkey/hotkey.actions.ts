import { createAction, props } from '@ngrx/store';

import { HotkeyCollection } from './hotkey.collection';
import { Hotkey } from './hotkey.model';

export const selectHotkey = createAction('[Hotkey] Select', props<{ payload: Hotkey }>());

export const listHotkey = createAction('[Hotkey] List');
export const listHotkeySuccess = createAction('[Hotkey] List Success', props<{ payload: HotkeyCollection[] }>());
