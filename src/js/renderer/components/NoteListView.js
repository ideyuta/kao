import React, {PropTypes} from 'react';

const propTypes = {
  fetchNote: PropTypes.func,
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
        <li
          key={note.id}
          onClick={() => this.props.fetchNote(note.id)}
        >
          <p>{note.title}</p>
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
