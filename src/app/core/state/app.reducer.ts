import { ErrorState, reducer as errorReducer } from '../../shared/state/error/error.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  error: ErrorState;
}

export const appReducers: ActionReducerMap<AppState> = {
  error: errorReducer,
};
