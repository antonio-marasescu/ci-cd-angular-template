import { Action } from '@ngrx/store';
import { WidgetModel } from '../types/widget.model';

export enum WidgetActionTypes {
  GET_ALL_WIDGETS = '[Widget] Get All',
  GET_ALL_WIDGETS_SUCCESS = '[Widget] Get All Success',
}

export class GetAllWidgets implements Action {
  readonly type = WidgetActionTypes.GET_ALL_WIDGETS;
  constructor() {}
}

export class GetAllWidgetsSuccess implements Action {
  readonly type = WidgetActionTypes.GET_ALL_WIDGETS_SUCCESS;
  constructor(public payload: WidgetModel[]) {}
}

export type WidgetActionsUnion = GetAllWidgets | GetAllWidgetsSuccess;
