import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { HotkeyCollection } from '@app/store/hotkey/hotkey.collection';
import HotkeyState from '@app/store/hotkey/hotkey.state';
import * as HotkeyActions from '@app/store/hotkey/hotkey.actions';
import { Hotkey } from '@app/store/hotkey/hotkey.model';
import { AppState } from '@app/store/app.state';
import { selectListHotkey } from '@app/store/hotkey/hotkey.selector';

@Component({
  selector: 'app-hotkey-home',
  templateUrl: './hotkey-home.component.html',
  styleUrls: ['./hotkey-home.component.scss'],
})
export class HotkeyHomeComponent implements OnInit {
  hotkey$: Observable<Array<HotkeyCollection>>;

  constructor(private store: Store<AppState>) {
    this.hotkey$ = store.pipe(select(selectListHotkey));
    this.store.dispatch(HotkeyActions.listHotkey());
  }

  ngOnInit(): void {}

  select(hotkey: Hotkey) {
    this.store.dispatch(HotkeyActions.selectHotkey({ payload: hotkey }));
  }
}
