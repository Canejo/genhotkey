import Dexie from 'dexie';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DexieService extends Dexie {
  constructor() {
    super('GenHotkey');
    this.version(1).stores({
      hotkey: '++id',
    });
  }
}
