import types from '../constants/noteActionTypes';

/**
 * Note Store
 *
 * @param {Object} state - State of note
 * @param {boolean} state.isFetching - note titles is fetching
 * @param {boolean} state.isPosting - note is Posting
 * @param {Object[]} state.noteTitles - note title list
 * @param {Object} action - action
 * @return {Object}
 */
export default function note(state = {
  isFetching: false,
  isPosting: false,
  noteTitles: []
}, action) {
  switch (action.type) {
  case types.FETCH_NOTE_TITLES:
    return Object.assign({}, state, {isFetching: true});
  case types.POST_NOTE:
    return Object.assign({}, state, {isPosting: true});
  case types.POSTED_NOTE:
    return Object.assign({}, state, {isPosting: false});
  case types.RECEIVE_NOTE_TITLES:
    if (action.error) {
      return Object.assign({}, state, {isFetching: false});
    }
    return Object.assign({}, state, {
      isFetching: false,
      noteTitles: action.payload
    });
  default:
    break;
  }
  return state;
}
