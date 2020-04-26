import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import * as HotkeyActions from '@app/store/hotkey/hotkey.actions';
import { HotkeyCollection } from './hotkey.collection';

@Injectable()
export class HotkeyEffects {
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

  listHotkey$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(HotkeyActions.listHotkey),
      mergeMap((action) => of(HotkeyActions.listHotkeySuccess({ payload: this.hotkeys })))
    )
  );

  constructor(private action$: Actions) {}
}
