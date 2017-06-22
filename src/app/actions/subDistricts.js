import { CALL_API } from 'redux-api-middleware';
import { MASTERS_ENDPOINT } from '../constants/endpoints';
import * as actionType from '../constants/actionTypes';

export const loadSubDistricts = (id) => ({
  [CALL_API]: {
    endpoint: `${MASTERS_ENDPOINT}/master/subDistrict/${id}`,
    method: 'GET',
    types: [actionType.LOAD_SUBDISTRICTS_REQUEST, actionType.LOAD_SUBDISTRICTS_SUCCESS, actionType.LOAD_SUBDISTRICTS_FAILURE]
  }
})
