import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const propTypes = {
  note: PropTypes.object
};

/**
 * NoteListView Component
 */
export default class NoteListView extends React.Component {

  /**
   * render
   *
   * @return {ReactElement}
   */
  render() {
    const notes = this.props.note.noteTitles.map(note => {
      return (
        <li key={note.id}>
          <Link to={`/note/${note.id}`}>
            <p>{note.title}</p>
          </Link>
        </li>
      );
    });
    return (
      <div className="NoteListView">
        <ul>{notes}</ul>
      </div>
    );
  }
}

NoteListView.propTypes = propTypes;
