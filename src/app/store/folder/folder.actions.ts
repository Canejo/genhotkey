import { createAction, props } from '@ngrx/store';
import { Folder } from './folder.model';

export const listFolder = createAction('[Folder] List');
export const listFolderSuccess = createAction('[Folder] List Success', props<{ payload: Folder[] }>());
