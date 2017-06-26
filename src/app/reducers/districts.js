import * as actionType from '../constants/actionTypes';

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.LOAD_DISTRICTS_SUCCESS:
      return action.payload
      break;
    default:
      return state
  }
}
