import { Action } from '@ngrx/store';

export enum ErrorActionTypes {
  PUSH_ERROR = '[Error] Push Error',
}

export class PushError implements Action {
  readonly type = ErrorActionTypes.PUSH_ERROR;

  constructor(public payload: any) {}
}

export type ErrorActionsUnion = PushError;
