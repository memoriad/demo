import { CALL_API } from 'redux-api-middleware';
import { MASTERS_ENDPOINT } from '../constants/endpoints';
import * as actionType from '../constants/actionTypes';

export const loadMasters = () => ({
  [CALL_API]: {
    endpoint: `${MASTERS_ENDPOINT}/Sn013GetMasters`,
    method: 'GET',
    types: [actionType.LOAD_MASTERS_REQUEST, actionType.LOAD_MASTERS_SUCCESS, actionType.LOAD_MASTERS_FAILURE]
  }
})
