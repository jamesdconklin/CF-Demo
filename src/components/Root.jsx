import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import App from 'Components/App';

class Root extends PureComponent {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    );
  }
}

export default DragDropContext(HTML5Backend)(Root);
