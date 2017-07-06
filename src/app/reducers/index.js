import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import masters from './masters';
import register from './register';
import districts from './districts';
import subDistricts from './subDistricts';
import zipCode from './zipCode';
import paramConfigs from './paramConfigs';

export default combineReducers({
  masters,
  register,
  districts,
  subDistricts,
  zipCode,
  paramConfigs,
  form: formReducer
})
