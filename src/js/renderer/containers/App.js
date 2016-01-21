import React from 'react';
import {Router, Route} from 'react-router';
import IndexScene from './IndexScene';
import NoteScene from './NoteScene';

/**
 * App
 */
export default class App extends React.Component {

  /**
   * render
   *
   * @return {ReactElement}
   */
  render() {
    return (
      <Router>
        <Route
          component={IndexScene}
          path="/"
        >
          <Route
            component={NoteScene}
            path="note/:id"
          />
        </Route>
      </Router>
    );
  }
}
