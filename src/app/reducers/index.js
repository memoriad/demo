import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import masters from './masters';
import register from './register';

export default combineReducers({
  masters,
  register,
  form: formReducer
})
