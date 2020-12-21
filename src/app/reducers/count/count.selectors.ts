import {createFeatureSelector, createSelector} from '@ngrx/store';
import {COUNT_NODE, CountState} from './count.reducer';

export const selectCountFeature = createFeatureSelector<CountState>(COUNT_NODE)

export const selectCount = createSelector(
  selectCountFeature,
  (state: CountState): number => state.count
);

export const selectUpdate = createSelector(
  selectCountFeature,
  (state: CountState): number => state.update
);
