import React, { PureComponent } from 'react';

import AlertContainer from 'Components/AlertContainer';
import TaskListContainer from 'Components/TaskListContainer';


export default function App(props) {
  return (
    <div>
      <TaskListContainer/>
      <AlertContainer/>
    </div>
  );
}
