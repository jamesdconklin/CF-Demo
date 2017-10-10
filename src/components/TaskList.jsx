import React, { PureComponent } from 'react';

import Task from 'Components/Task';

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
        <span>Tasks</span>
        <span>
          <button onClick={newTask}>
            NEW TASK, Y'ALL
          </button>
          <button disabled={!modified} onClick={(e) => persist(tasks)}>
            POST THOSE TASKS!
          </button>
        </span>
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
