import { Injectable } from '@angular/core';
import { NotificationsService } from '../../services/notifications.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ErrorActionTypes, PushError } from './error.actions';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class ErrorEffects {
  constructor(private actions$: Actions, private notificationsService: NotificationsService) {}

  pushError$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType<PushError>(ErrorActionTypes.PUSH_ERROR),
        map((action) => action.payload),
        tap((error) => this.notificationsService.display(error))
      );
    },
    { dispatch: false }
  );
}
