import KaonashiClient from '../helpers/KaonashiClient';
import types from '../constants/noteActionTypes';

const client = new KaonashiClient();


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
    dispatch({type: types.POSTING_NOTE});
    return dispatch({
      payload: client.postNote(),
      type: types.POST_NOTE
    });
  };
}
