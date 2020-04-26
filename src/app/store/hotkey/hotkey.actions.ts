import { createAction, props } from '@ngrx/store';

import { Hotkey } from './hotkey.model';

export const selectHotkey = createAction('[Hotkey] Select', props<{ payload: Hotkey }>());
export const listHotkey = createAction('[Hotkey] List');
export const listHotkeySuccess = createAction('[Hotkey] List Success', props<{ payload: Hotkey[] }>());
export const fecharHotkey = createAction('[Hotkey] Fechar hotkey', props<{ payload: number }>());
export const salvarHotkey = createAction('[Hotkey] Salvar hotkey', props<{ payload: Hotkey }>());
export const changeHotkey = createAction(
  '[Hotkey] Change hotkey',
  props<{ payload: { hotkey: Hotkey; change: boolean; index: number } }>()
);
