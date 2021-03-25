import { WidgetModel } from '../types/widget.model';
import { WidgetActionsUnion, WidgetActionTypes } from './widget.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const WIDGET_FEATURE_NAME = 'widget';

export interface WidgetState {
  widgets: WidgetModel[];
  loading: boolean;
}

export const initialWidgetState: WidgetState = {
  widgets: [],
  loading: false,
};

export function reducer(state: WidgetState = initialWidgetState, action: WidgetActionsUnion): WidgetState {
  switch (action.type) {
    case WidgetActionTypes.GET_ALL_WIDGETS:
      return {
        ...state,
        loading: true,
      };
    case WidgetActionTypes.GET_ALL_WIDGETS_SUCCESS:
      return {
        ...state,
        widgets: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}

export const widgetFeatureSelector = createFeatureSelector(WIDGET_FEATURE_NAME);
export const selectWidgetStateIsLoading = () =>
  createSelector(widgetFeatureSelector, (state: WidgetState) => state.loading);
export const selectWidgetStateWidgets = () =>
  createSelector(widgetFeatureSelector, (state: WidgetState) => state.widgets);
