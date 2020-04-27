import { Injectable } from '@angular/core';
import Dexie from 'dexie';

import { Hotkey } from '@app/store/hotkey/hotkey.model';
import { DexieService } from '@app/@core/service/dexie.service';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HotkeyService {
  table: Dexie.Table<Hotkey, Number>;

  constructor(private dexieService: DexieService) {
    this.table = this.dexieService.table('hotkey');
  }

  getAll() {
    return from(this.table.toArray());
  }

  addOrUpdate(data: Hotkey) {
    if (data.id) {
      return from(this.table.update(data.id, data));
    } else {
      return from(this.table.add(data));
    }
  }
}
