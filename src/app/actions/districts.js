import { CALL_API } from 'redux-api-middleware';
import { MASTERS_ENDPOINT } from '../constants/endpoints';
import * as actionType from '../constants/actionTypes';

export const loadDistricts = (id) => ({
  [CALL_API]: {
    endpoint: `${MASTERS_ENDPOINT}/SSO40/Sn015GetDistricts/${id}`,
    method: 'GET',
    types: [actionType.LOAD_DISTRICTS_REQUEST, actionType.LOAD_DISTRICTS_SUCCESS, actionType.LOAD_DISTRICTS_FAILURE]
  }
})
