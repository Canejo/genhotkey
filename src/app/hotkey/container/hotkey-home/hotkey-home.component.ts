import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { HotkeyCollection } from '@app/store/hotkey/hotkey.collection';
import * as HotkeyActions from '@app/store/hotkey/hotkey.actions';
import { Hotkey } from '@app/store/hotkey/hotkey.model';
import { AppState } from '@app/store/app.state';
import { selectListHotkey, selectSelectedHotkey } from '@app/store/hotkey/hotkey.selector';

@Component({
  selector: 'app-hotkey-home',
  templateUrl: './hotkey-home.component.html',
  styleUrls: ['./hotkey-home.component.scss'],
})
export class HotkeyHomeComponent implements OnInit {
  hotkey$: Observable<Array<HotkeyCollection>>;
  selectedHotkey$: Observable<Array<Hotkey>>;

  constructor(private store: Store<AppState>) {
    this.hotkey$ = store.pipe(select(selectListHotkey));
    this.selectedHotkey$ = store.pipe(select(selectSelectedHotkey));

    this.store.dispatch(HotkeyActions.listHotkey());
  }

  ngOnInit(): void {}

  select(hotkey: Hotkey) {
    this.store.dispatch(HotkeyActions.selectHotkey({ payload: hotkey }));
  }

  fechar(hotkey: Hotkey) {
    this.store.dispatch(HotkeyActions.fecharHotkey({ payload: hotkey }));
  }

  save(hotkey: Hotkey) {
    this.store.dispatch(HotkeyActions.salvarHotkey({ payload: hotkey }));
  }
}
