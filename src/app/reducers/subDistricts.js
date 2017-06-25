import * as actionType from '../constants/actionTypes';

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.LOAD_SUBDISTRICTS_SUCCESS:
      return action.payload.result
      break;
    default:
      return state
  }
}
