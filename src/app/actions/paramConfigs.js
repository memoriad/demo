import { CALL_API } from 'redux-api-middleware';
import { MASTERS_ENDPOINT } from '../constants/endpoints';
import * as actionType from '../constants/actionTypes';

export const loadParamConfigs = () => ({
  [CALL_API]: {
    endpoint: `${MASTERS_ENDPOINT}/master/Sn017GetParamConfigs`,
    method: 'GET',
    types: [actionType.LOAD_PARAMCONFIGS_REQUEST, actionType.LOAD_PARAMCONFIGS_SUCCESS, actionType.LOAD_PARAMCONFIGS_FAILURE]
  }
})
