import { createReducer, on, Action } from '@ngrx/store';

import * as FolderActions from './folder.actions';
import FolderState, { initializeState } from './folder.state';

export const intialState = initializeState();

const reducer = createReducer(
  intialState,
  on(FolderActions.listFolderSuccess, (state: FolderState, { payload }) => {
    return { ...state, folders: payload };
  })
);

export function FolderReducer(state: FolderState | undefined, action: Action) {
  return reducer(state, action);
}
