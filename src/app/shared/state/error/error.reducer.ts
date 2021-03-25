import { ErrorActionsUnion, ErrorActionTypes } from './error.actions';

export interface ErrorState {
  latestError: any;
}

export const initialErrorState = {
  latestError: null,
};

export function reducer(state: ErrorState = initialErrorState, action: ErrorActionsUnion): ErrorState {
  switch (action.type) {
    case ErrorActionTypes.PUSH_ERROR:
      return {
        ...state,
        latestError: action.payload,
      };
    default:
      return state;
  }
}
