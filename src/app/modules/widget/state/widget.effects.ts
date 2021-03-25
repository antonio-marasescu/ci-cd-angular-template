import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { WidgetService } from '../services/widget.service';
import { catchError, map, switchMap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { PushError } from '../../../shared/state/error/error.actions';
import { of } from 'rxjs';
import { GetAllWidgets, GetAllWidgetsSuccess, WidgetActionTypes } from './widget.actions';

@Injectable({ providedIn: 'any' })
export class WidgetEffects {
  constructor(private actions$: Actions, private widgetService: WidgetService) {}

  getAll$ = createEffect(() => {
    return this.actions$.pipe(
      ofType<GetAllWidgets>(WidgetActionTypes.GET_ALL_WIDGETS),
      switchMap(() => this.widgetService.getAll()),
      map((widgets) => new GetAllWidgetsSuccess(widgets)),
      catchError((error: HttpErrorResponse) => of(new PushError(error)))
    );
  });
}
