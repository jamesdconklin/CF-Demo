import React from 'react';
import { Provider } from 'react-redux';

import TaskListContainer from 'Components/TaskListContainer';

const Root = ({ store }) => {

  return (
    <Provider store={store}>
      <TaskListContainer/>
    </Provider>
  );
};

export default Root;
