import reaction from 'dacho';

/**
 * @type {Object}
 */
const noteActionTypes = reaction([
  'DELETE_NOTE',
  'DELETED_NOTE',
  'FETCH_NOTE',
  'FETCH_NOTE_TITLES',
  'POST_NOTE',
  'POSTED_NOTE',
  'RECEIVE_NOTE',
  'RECEIVE_NOTE_TITLES'
], 'NOTE/');

export default noteActionTypes;
