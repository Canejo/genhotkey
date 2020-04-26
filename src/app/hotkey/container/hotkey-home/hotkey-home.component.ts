import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as HotkeyActions from '@app/store/hotkey/hotkey.actions';
import * as FolderActions from '@app/store/folder/folder.actions';
import { Hotkey } from '@app/store/hotkey/hotkey.model';
import { AppState } from '@app/store/app.state';
import { selectListHotkey, selectSelectedHotkey } from '@app/store/hotkey/hotkey.selector';
import { selectListFolder } from '@app/store/folder/folder.selector';
import { Folder } from '@app/store/folder/folder.model';

@Component({
  selector: 'app-hotkey-home',
  templateUrl: './hotkey-home.component.html',
  styleUrls: ['./hotkey-home.component.scss'],
})
export class HotkeyHomeComponent implements OnInit {
  hotkey$: Observable<Array<Hotkey>>;
  selectedHotkey$: Observable<Array<Hotkey>>;

  folders$: Observable<Array<Folder>>;

  constructor(private store: Store<AppState>) {
    this.hotkey$ = store.pipe(select(selectListHotkey));
    this.selectedHotkey$ = store.pipe(select(selectSelectedHotkey));
    this.folders$ = store.pipe(select(selectListFolder));

    this.store.dispatch(HotkeyActions.listHotkey());
    this.store.dispatch(FolderActions.listFolder());
  }

  ngOnInit(): void {}

  select(hotkey: Hotkey) {
    this.store.dispatch(HotkeyActions.selectHotkey({ payload: hotkey }));
  }

  fechar(index: number) {
    this.store.dispatch(HotkeyActions.fecharHotkey({ payload: index }));
  }

  save(hotkey: Hotkey) {
    this.store.dispatch(HotkeyActions.salvarHotkey({ payload: hotkey }));
  }

  change(event: { hotkey: Hotkey; change: boolean; index: number }) {
    this.store.dispatch(HotkeyActions.changeHotkey({ payload: event }));
  }

  onNew() {
    this.store.dispatch(HotkeyActions.selectHotkey({ payload: null }));
  }
}
