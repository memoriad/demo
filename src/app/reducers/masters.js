import * as actionType from '../constants/actionTypes';

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.LOAD_MASTERS_SUCCESS:
      return action.payload
      break;
    default:
      return state
  }
}
