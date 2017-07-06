import * as actionType from '../constants/actionTypes';

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.LOAD_PARAMCONFIGS_SUCCESS:
      return action.payload.result
      break;
    default:
      return state
  }
}

export const getParamConfig = (state, paramCode) => (
  Object.keys(state.paramConfigs).length === 0 ? {} : state.paramConfigs[paramCode]
)
