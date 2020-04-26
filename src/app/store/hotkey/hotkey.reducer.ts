import { createReducer, on, Action } from '@ngrx/store';

import * as HotkeyActions from './hotkey.actions';
import HotkeyState, { initializeState } from './hotkey.state';

export const intialState = initializeState();

const reducer = createReducer(
  intialState,
  on(HotkeyActions.listHotkeySuccess, (state: HotkeyState, { payload }) => {
    return { ...state, Hotkeys: payload };
  })
);

export function HotkeyReducer(state: HotkeyState | undefined, action: Action) {
  return reducer(state, action);
}
