import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchNote} from '../actions/note';

const propTypes = {
  fetchNote: PropTypes.func,
  note: PropTypes.object,
  routeParams: PropTypes.object
};

/**
 * NoteScene Container
 */
export default class NoteScene extends React.Component {

  componentDidMount() {
    this.props.fetchNote(this.props.routeParams.id);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.note) {
      this.props.fetchNote(nextProps.routeParams.id);
    }
  }

  /**
   * render
   *
   * @return {ReactElement}
   */
  render() {
    if (!this.props.note) {
      return <div><p>Loading...</p></div>;
    }
    return (
      <div className="NoteView">
        <p>{`Note:${this.props.note.id}`}</p>
        <p>{this.props.note.body}</p>
      </div>
    );
  }
}

NoteScene.propTypes = propTypes;

/**
 * map state to props
 *
 * @param {Object} state - state
 * @param {Object} props - own props
 * @return {Object}
 */
function mapStateToProps(state, props) {
  return {note: state.note.notes[props.routeParams.id]};
}

/**
 * map dispatch to props
 *
 * @param {Function} dispatch - dispatch
 * @return {Object}
 */
function mapDispachToProps(dispatch) {
  return {fetchNote: bindActionCreators(fetchNote, dispatch)};
}

export default connect(mapStateToProps, mapDispachToProps)(NoteScene);
