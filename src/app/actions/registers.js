import { CALL_API } from 'redux-api-middleware';
import { Redirect } from 'react-router'
import { REGISTERS_ENDPOINT } from '../constants/endpoints';
import * as actionType from '../constants/actionTypes';

export const loadRegisters = () => ({
  [CALL_API]: {
    endpoint: REGISTERS_ENDPOINT,
    method: 'GET',
    types: [actionType.LOAD_REGISTERS_REQUEST, actionType.LOAD_REGISTERS_SUCCESS, actionType.LOAD_REGISTERS_FAILURE]
  }
})

export const loadRegister = (id) => ({
  [CALL_API]: {
    endpoint: `${REGISTERS_ENDPOINT}/${id}`,
    method: 'GET',
    types: [actionType.LOAD_REGISTER_REQUEST, actionType.LOAD_REGISTER_SUCCESS, actionType.LOAD_REGISTER_FAILURE]
  }
})

export const submitRegister = (values) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: REGISTERS_ENDPOINT,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(values),
        types: [
          actionType.SUBMIT_REGISTERS_REQUEST,
          {
            types: actionType.SUBMIT_REGISTERS_SUCCESS,
            payload: (_action, _state, res) => {
              return res.json().then((register) => {
                return register
              })
            }
          },
          actionType.SUBMIT_REGISTERS_FAILURE
        ]
      }
    })
)
