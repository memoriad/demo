import { CALL_API } from 'redux-api-middleware';
import { MASTERS_ENDPOINT } from '../constants/endpoints';
import * as actionType from '../constants/actionTypes';

export const loadZipCode = (id) => ({
  [CALL_API]: {
    endpoint: `${MASTERS_ENDPOINT}/master/Sn016GetZipCode/${id}`,
    method: 'GET',
    types: [actionType.LOAD_ZIPCODE_REQUEST, actionType.LOAD_ZIPCODE_SUCCESS, actionType.LOAD_ZIPCODE_FAILURE]
  }
})
