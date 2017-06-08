import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import pages from './pages';
import masters from './masters';
import registers from './registers';

export default combineReducers({
  pages,
  masters,
  registers,
  form: formReducer
})
