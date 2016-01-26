import React, {PropTypes} from 'react';
import classNames from 'classnames';
import InlineNewPostEditor from './InlineNewPostEditor';
import NoteListView from './NoteListView';

const propTypes = {
  isScrollFixed: PropTypes.bool,
  note: PropTypes.object,
  postNote: PropTypes.func
};


/**
 * IndexView Component
 */
export default class IndexView extends React.Component {
  /**
   * render
   *
   * @return {ReactElement}
   */
  render() {
    return (
      <div className={classNames('IndexView', {isScrollFixed: this.props.isScrollFixed})}>
        <InlineNewPostEditor
          postNote={this.props.postNote}
        />
        <NoteListView note={this.props.note} />
      </div>
    );
  }
}

IndexView.propTypes = propTypes;
