import * as actions from '../actions/actions';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case actions.FETCH_HISTORY:
      return { ...state, loading: true };
    case actions.HISTORY_RECEIVED:
      return { ...state, history: action.history, loading: false }
    default:
      return state;
  }
};

export default reducer;