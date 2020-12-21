import {CountActions, countActionsType} from './count.actions';

export const COUNT_NODE = 'count';

export interface CountState {
  count: number;
  update: number;
}

const initialState: CountState = {
  count: 0,
  update: Date.now()
};

export const countReducer = (state = initialState, action: CountActions) => {
  switch (action.type) {
    case countActionsType.increase:
      return {
        ...state,
        count: state.count + 1
      }
    case countActionsType.decrease:
      return {
        ...state,
        count: state.count - 1
      }
    case countActionsType.clear:
      return {
        ...state,
        count: 0
      }
    default:
      return state;
  }

};
