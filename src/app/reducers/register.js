import * as actionType from '../constants/actionTypes';

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.LOAD_REGISTER_SUCCESS:
      return action.payload
      break;
    default:
      return state
  }
}

export const getRegistrant = (state) => {
  let registrant = state.register

  if(registrant.birthDate !== void 0) {
    registrant.birthDate = new Date(registrant.birthDate)
  }

  return registrant
}
