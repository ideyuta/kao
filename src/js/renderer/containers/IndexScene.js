import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
  fetchNote,
  fetchNoteTitles,
  postNote
} from '../actions/note';
import NoteListView from '../components/NoteListView';

const propTypes = {
  children: PropTypes.any,
  fetchNote: PropTypes.func,
  fetchNoteTitles: PropTypes.func,
  note: PropTypes.object,
  postNote: PropTypes.func
};

/**
 * IndexScene
 */
class IndexScene extends React.Component {

  /**
   * fetch notes
   */
  componentDidMount() {
    this.props.fetchNoteTitles();
  }

  /**
   * fetchNotes from post complete
   *
   * @param {Object} nextProps - props
   */
  componentWillReceiveProps(nextProps) {
    if (this.props.note.isPosting && !nextProps.note.isPosting) {
      this.props.fetchNoteTitles();
    }
  }

  /**
   * render
   *
   * @return {ReactElement}
   */
  render() {
    return (
      <div className="Wrapper">
        <button onClick={this.props.postNote}>Add Post</button>
        <NoteListView
          fetchNote={this.props.fetchNote}
          note={this.props.note}
        />
        {this.props.children}
      </div>
    );
  }
}

IndexScene.propTypes = propTypes;

/**
 * map state to props
 *
 * @param {Object} state - state
 * @return {Object}
 */
function mapStateToProps(state) {
  return {note: state.note};
}

/**
 * map dispatch to props
 *
 * @param {Function} dispatch - dispatch
 * @return {Object}
 */
function mapDispachToProps(dispatch) {
  return {
    fetchNote: bindActionCreators(fetchNote, dispatch),
    fetchNoteTitles: bindActionCreators(fetchNoteTitles, dispatch),
    postNote: bindActionCreators(postNote, dispatch)
  };
}

export default connect(mapStateToProps, mapDispachToProps)(IndexScene);
