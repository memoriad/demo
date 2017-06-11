import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import masters from './masters';
import registers from './registers';

export default combineReducers({
  masters,
  registers,
  form: formReducer
})
