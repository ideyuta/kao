import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
  fetchNoteTitles,
  postNote
} from '../actions/note';

const propTypes = {
  fetchNoteTitles: PropTypes.func,
  note: PropTypes.object,
  postNote: PropTypes.func
};

/**
 * App
 */
export default class App extends React.Component {

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
    const notes = this.props.note.noteTitles.map(note => {
      return <li key={note.id}><p>{note.title}</p></li>;
    });
    return (
      <div className="Wrapper">
        <ul>{notes}</ul>
        <button onClick={this.props.postNote}>Add Post</button>
      </div>
    );
  }
}

App.propTypes = propTypes;

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

export default connect(mapStateToProps, mapDispachToProps)(App);
