import React, { PureComponent } from 'react';

import Task from 'Components/Task';

import styles from 'CSS/TaskList';

export default class TaskList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      tasks, deleteTask, renameTask,
      newTask, persist, modified
    } = this.props;

    return (
      <div>
        <div className={styles.taskListHeader}>
          <div className={styles.titleContainer}>
            <span className={styles.title}>Tasks</span>
          </div>
          <span>
            <button onClick={newTask} className={styles.addButton}>
              New Task
            </button>
            <button
              disabled={!modified}
              onClick={(e) => persist(tasks)}
              className={`${styles.saveButton} ${!modified && styles.disabled}`}
            >
              Save
            </button>
          </span>
        </div>
        <ul>
          {
            tasks.map(({ id, name, isFocused }, index) => (
              <Task
                key={id}
                id={id}
                name={name}
                index={index}
                isFocused={isFocused}
                deleteTask={deleteTask}
                renameTask={renameTask}
                />
            ))
          }
        </ul>
      </div>
    );
  }
}
