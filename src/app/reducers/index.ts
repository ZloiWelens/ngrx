import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {COUNT_NODE, countReducer, CountState} from './count/count.reducer';

export interface State {
  [COUNT_NODE]: CountState
}

export const reducers: ActionReducerMap<State> = {
  [COUNT_NODE]: countReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
