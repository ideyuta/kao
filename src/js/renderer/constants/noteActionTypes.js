import reaction from 'dacho';

/**
 * @type {Object}
 */
const noteActionTypes = reaction([
  'FETCH_NOTE_TITLES',
  'POST_NOTE',
  'POSTING_NOTE',
  'RECEIVE_NOTE_TITLES'
], 'NOTE/');

export default noteActionTypes;
