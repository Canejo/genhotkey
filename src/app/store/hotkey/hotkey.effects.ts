import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { createEffect, Actions, ofType, act } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import * as HotkeyActions from '@app/store/hotkey/hotkey.actions';
import { HotkeyCollection } from './hotkey.collection';
import { Hotkey } from './hotkey.model';

@Injectable()
export class HotkeyEffects {
  folders: any[] = [
    {
      Id: '1',
      Nome: 'Geral',
    },
    {
      Id: '2',
      Nome: 'Texto',
    },
  ];

  hotkeys: Hotkey[] = [
    {
      Id: '1',
      Nome: 'Pesquisar texto selecionado no google',
      IdFolder: '1',
    },
    {
      Id: '2',
      Nome: 'Corrigir palavra',
      IdFolder: '1',
    },
    {
      Id: '3',
      Nome: 'Uppercase',
      IdFolder: '2',
    },
    {
      Id: '4',
      Nome: 'Lowercase',
      IdFolder: '2',
    },
  ];

  listHotkey$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(HotkeyActions.listHotkey),
      mergeMap((action) => of(HotkeyActions.listHotkeySuccess({ payload: this.getHotkeyCollection() })))
    )
  );

  salvarHotkey$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(HotkeyActions.salvarHotkey),
      mergeMap((action) => {
        return of(HotkeyActions.listHotkeySuccess({ payload: this.getHotkeyCollection(action.payload) }));
      })
    )
  );

  constructor(private action$: Actions) {}

  getHotkeyCollection(newHotkey?: Hotkey): Array<HotkeyCollection> {
    const hotkeyCollection = new Array<HotkeyCollection>();

    for (let hotkey of this.hotkeys) {
      if (newHotkey && newHotkey.Id == hotkey.Id) hotkey = newHotkey;

      const aready = hotkeyCollection.find((m) => m.Id == hotkey.IdFolder);
      if (aready) {
        aready.Itens.push(hotkey);
      } else {
        hotkeyCollection.push({
          Id: hotkey.IdFolder,
          Nome: this.folders.find((m) => m.Id == hotkey.IdFolder).Nome,
          Itens: [hotkey],
        });
      }
    }

    return hotkeyCollection;
  }
}
