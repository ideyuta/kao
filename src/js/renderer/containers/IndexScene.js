import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';
import {
  fetchNoteTitles,
  postNote
} from '../actions/note';
import NoteListView from '../components/NoteListView';

const propTypes = {
  children: PropTypes.any,
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
    const {children} = this.props;
    return (
      <div className="Wrapper">
        <div className={classNames('IndexView', {isScrollFixed: children})}>
          <button onClick={this.props.postNote}>Add Post</button>
          <NoteListView note={this.props.note} />
        </div>
        {children}
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
    fetchNoteTitles: bindActionCreators(fetchNoteTitles, dispatch),
    postNote: bindActionCreators(postNote, dispatch)
  };
}

export default connect(mapStateToProps, mapDispachToProps)(IndexScene);
