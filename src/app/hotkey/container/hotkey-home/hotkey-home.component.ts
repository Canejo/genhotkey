import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { HotkeyCollection } from '@app/store/hotkey/hotkey.collection';
import HotkeyState from '@app/store/hotkey/hotkey.state';
import * as HotkeyActions from '@app/store/hotkey/hotkey.actions';
import { Hotkey } from '@app/store/hotkey/hotkey.model';

@Component({
  selector: 'app-hotkey-home',
  templateUrl: './hotkey-home.component.html',
  styleUrls: ['./hotkey-home.component.scss'],
})
export class HotkeyHomeComponent implements OnInit {
  hotkeys: HotkeyCollection[] = [
    {
      Nome: 'Geral',
      Itens: [
        {
          Nome: 'Pesquisar texto selecionado no google',
        },
        {
          Nome: 'Corrigir palavra',
        },
      ],
    },
    {
      Nome: 'Texto',
      Itens: [
        {
          Nome: 'Uppercase',
        },
        {
          Nome: 'Lowercase',
        },
      ],
    },
  ];

  hotkey$: Observable<HotkeyState>;

  constructor(private store: Store<{ hotkey: HotkeyState }>) {
    this.hotkey$ = store.pipe(select('hotkey'));
    this.store.dispatch(HotkeyActions.listHotkey());
  }

  ngOnInit(): void {}

  select(hotkey: Hotkey) {
    this.store.dispatch(HotkeyActions.selectHotkey({ payload: hotkey }));
  }
}
