import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import pages from './pages';
import masters from './masters';

export default combineReducers({
  form: formReducer,
  pages,
  masters
})
