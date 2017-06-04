import {
  LOAD_PAGES_SUCCESS,
  LOAD_PAGE_SUCCESS
} from '../constants/actionTypes';

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PAGES_SUCCESS:
      return action.payload
      break;
    case LOAD_PAGE_SUCCESS:
      return [action.payload]
      break;
    default:
      return state
  }
}

export const getPageById = (state, id) => (
  state.pages.find((page) => page.id === +id) || { title: '', content: '' }
)
