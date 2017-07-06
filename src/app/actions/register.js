import { CALL_API } from 'redux-api-middleware';
import { Redirect } from 'react-router'
import { REGISTERS_ENDPOINT } from '../constants/endpoints';
import * as actionType from '../constants/actionTypes';

export const loadRegister = (id) => ({
  [CALL_API]: {
    endpoint: `${REGISTERS_ENDPOINT}/Sn012Registrant/${id}`,
    method: 'GET',
    types: [actionType.LOAD_REGISTER_REQUEST, actionType.LOAD_REGISTER_SUCCESS, actionType.LOAD_REGISTER_FAILURE]
  }
})
