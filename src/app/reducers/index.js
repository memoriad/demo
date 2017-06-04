import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import pages from './pages';

export default combineReducers({
  form: formReducer,
  pages
})
