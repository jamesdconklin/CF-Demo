import React, { PureComponent } from 'react';

import Task from 'Components/Task';

export default class TaskList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { tasks, deleteTask } = this.props;
    return (
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
            />
          ))
        }
      </ul>
    );
  }
}
