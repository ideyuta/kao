import KaonashiClient from '../helpers/KaonashiClient';
import types from '../constants/noteActionTypes';

const client = new KaonashiClient();

/**
 * Delete Note
 *
 * @param {string} id - note id
 * @return {Function}
 */
export function deleteNote(id) {
  return dispatch => {
    dispatch({type: types.DELETE_NOTE});
    return dispatch({
      payload: client.deleteNote(id),
      type: types.DELETED_NOTE
    });
  };
}

/**
 * Fetch Note
 *
 * @param {string} id - note id
 * @return {Function}
 */
export function fetchNote(id) {
  return dispatch => {
    dispatch({type: types.FETCH_NOTE});
    return dispatch({
      payload: client.getNote(id),
      type: types.RECEIVE_NOTE
    });
  };
}

/**
 * Fetch Note Title List
 *
 * @return {Function}
 */
export function fetchNoteTitles() {
  return dispatch => {
    dispatch({type: types.FETCH_NOTE_TITLES});
    return dispatch({
      payload: client.getNoteTitles(),
      type: types.RECEIVE_NOTE_TITLES
    });
  };
}

/**
 * Post Note
 *
 * @return {Function}
 */
export function postNote() {
  return dispatch => {
    dispatch({type: types.POST_NOTE});
    return dispatch({
      payload: client.postNote(),
      type: types.POSTED_NOTE
    });
  };
}
