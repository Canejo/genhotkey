import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { mergeMap, switchMap, map } from 'rxjs/operators';

import * as HotkeyActions from '@app/store/hotkey/hotkey.actions';
import { HotkeyService } from '@app/hotkey/shared/service/hotkey.service';
import { Hotkey } from './hotkey.model';

@Injectable()
export class HotkeyEffects {
  listHotkey$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(HotkeyActions.listHotkey),
      switchMap(({ payload }) => {
        return this.hotkeyService
          .getAll()
          .pipe(map((hotkey: Hotkey[]) => HotkeyActions.listHotkeySuccess({ payload: hotkey })));
      })
    )
  );

  salvarHotkey$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(HotkeyActions.salvarHotkey),
      switchMap(({ payload }) => {
        return this.hotkeyService.addOrUpdate(payload).pipe(
          map((id) => {
            return HotkeyActions.salvarHotkeySuccess({
              payload: {
                ...payload,
                id,
              },
            });
          })
        );
      })
    )
  );

  constructor(private action$: Actions, private hotkeyService: HotkeyService) {}
}
