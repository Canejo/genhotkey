import { createReducer, on, Action } from '@ngrx/store';

import * as HotkeyActions from './hotkey.actions';
import HotkeyState, { initializeState } from './hotkey.state';

export const intialState = initializeState();

const reducer = createReducer(
  intialState,
  on(HotkeyActions.listHotkeySuccess, (state: HotkeyState, { payload }) => {
    return { ...state, hotkeys: payload };
  }),
  on(HotkeyActions.salvarHotkeySuccess, (state: HotkeyState, { payload }) => {
    if (state.hotkeys.find((m) => m.id === payload.id)) {
      return {
        ...state,
      };
    } else {
      return {
        ...state,
        hotkeys: [...state.hotkeys, payload],
      };
    }
  }),
  on(HotkeyActions.selectHotkey, (state: HotkeyState, { payload }) => {
    if (payload === null) {
      return { ...state, selectedHotkeys: [...state.selectedHotkeys, { nome: 'Hotkey sem título' }] };
    } else if (!state.selectedHotkeys.find((m) => m.id === payload.id)) {
      return { ...state, selectedHotkeys: [...state.selectedHotkeys, payload] };
    } else {
      return state;
    }
  }),
  on(HotkeyActions.fecharHotkey, (state: HotkeyState, { payload }) => {
    return {
      ...state,
      selectedHotkeys: [...state.selectedHotkeys.slice(0, payload), ...state.selectedHotkeys.slice(payload + 1)],
    };
  })
);

export function HotkeyReducer(state: HotkeyState | undefined, action: Action) {
  return reducer(state, action);
}
