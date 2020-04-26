import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { createEffect, Actions, ofType, act } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import * as FolderActions from '@app/store/folder/folder.actions';

@Injectable()
export class FolderEffects {
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

  listFolder$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(FolderActions.listFolder),
      mergeMap((action) => of(FolderActions.listFolderSuccess({ payload: this.folders })))
    )
  );

  constructor(private action$: Actions) {}
}
