import { Folder } from './folder.model';

export default class FolderState {
  folders: Array<Folder>;
}

export const initializeState = (): FolderState => {
  return {
    folders: Array<Folder>(),
  };
};
