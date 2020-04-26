import { createSelector } from '@ngrx/store';

import { AppState } from '../app.state';
import FolderState from './folder.state';

export const selectFolder = (state: AppState) => state.folder;

export const selectListFolder = createSelector(selectFolder, (state: FolderState) => state.folders);
