import * as actionType from '../constants/actionTypes';

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.LOAD_REGISTERS_SUCCESS:
      return action.payload
      break;
    case actionType.LOAD_REGISTER_SUCCESS:
      return [action.payload]
      break;
    default:
      return state
  }
}

export const getRegisterById = (state) => (
  state.registers.find((register) => register.id === state.registers[0].id) || {}
)
