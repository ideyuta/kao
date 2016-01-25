import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link, PropTypes} from 'react-router';
import {deleteNote, fetchNote} from '../actions/note';

const contextTypes = {
  history: PropTypes.history
};

const propTypes = {
  deleteNote: React.PropTypes.func,
  fetchNote: React.PropTypes.func,
  note: React.PropTypes.object,
  routeParams: React.PropTypes.object
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
    const {note} = this.props;
    if (!note) {
      return <div><p>Loading...</p></div>;
    }
    return (
      <div className="NoteView">
        <Link to="/"><p>Back</p></Link>
        <p>{`Note:${note.id}`}</p>
        <p>{note.body}</p>
        <button onClick={() => {
          this.props.deleteNote(note.id);
          this.context.history.pushState(null, '/');
        }}
        >
          <Link to="/">Delete</Link>
        </button>
      </div>
    );
  }
}

NoteScene.contextTypes = contextTypes;
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
  return {
    deleteNote: bindActionCreators(deleteNote, dispatch),
    fetchNote: bindActionCreators(fetchNote, dispatch)
  };
}

export default connect(mapStateToProps, mapDispachToProps)(NoteScene);
