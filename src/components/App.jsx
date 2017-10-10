import React, { PureComponent } from 'react';

import AlertListContainer from 'Components/AlertListContainer';
import TaskListContainer from 'Components/TaskListContainer';

import styles from 'CSS/App';

export default function App(props) {
  return (
    <div className={styles.main}>
      <div className={styles.header}/>
      <div className={styles.content}>
        <TaskListContainer/>
        <AlertListContainer/>
      </div>
    </div>
  );
}
