import React from 'react';
import nbem from 'nbem';

const propTypes = {
  postNote: React.PropTypes.func
};


/**
 * InlineNewPostEditor Component
 */
export default class InlineNewPostEditor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isEdit: false};
  }

  /**
   * render
   *
   * @param {function} i - nbem function
   * @return {ReactElement}
   */
  renderNavigation(i) {
    return (
     <div className={i('&nav')}>
       <button onClick={() => {
         this.props.postNote();
         this.setState({isEdit: false});
       }}
       >Add Post</button>
     </div>
   );
  }

  /**
   * render
   *
   * @return {ReactElement}
   */
  render() {
    const i = nbem();
    return (
      <div className={i('InlineNewPostEditor')}>
        <div className={i('&editor')}>
          <textarea
            className={i('&&textarea')}
            onFocus={() => this.setState({isEdit: true})}
            placeholder="Write here..."
            ref="textarea"
          />
        </div>
        {this.state.isEdit && this.renderNavigation(i)}
      </div>
    );
  }
}

InlineNewPostEditor.propTypes = propTypes;
