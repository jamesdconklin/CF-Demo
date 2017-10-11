import React, { PureComponent } from 'react';
import { DropTarget } from 'react-dnd';
import update from 'immutability-helper';

import Task from 'Components/Task';
import { ItemTypes } from 'Utils/constants';

import styles from 'CSS/TaskList';

const cardTarget = {
	drop() {},
};

class TaskList extends PureComponent {
  constructor(props) {
    super(props);
		this.state = {
			tasks: props.tasks
		};

		this.findTask = this.findTask.bind(this);
		this.moveTask = this.moveTask.bind(this);
		this.commitMove = this.commitMove.bind(this);
  }

	componentWillReceiveProps({tasks}) {
		this.setState({
			tasks
		});
	}

	commitMove() {
		const { tasks } = this.state;
		this.props.receiveTasks({ tasks, modified: true });
	}

	findTask(id) {
		const index = this.state.tasks.findIndex(task => id === task.id);
		return { task: this.state.tasks[index], index };
	}

	moveTask(id, toIndex) {
		const { task, index } = this.findTask(id);

		this.setState(
			update(this.state, {
				tasks: {
					$splice: [[index, 1], [toIndex, 0, task]],
				},
			})
		);
	}


  render() {
    const {
      deleteTask, renameTask, connectDropTarget,
      newTask, persist, modified, moveTask,
    } = this.props;

		const { tasks } = this.state;

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
        { connectDropTarget(
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
									moveTask={this.moveTask}
									findTask={this.findTask}
									commitMove={this.commitMove}
	                />
	            ))
	          }
	        </ul>
				) }
      </div>
    );
  }
}

export default DropTarget(
	ItemTypes.TASK, cardTarget, connect => ({
    connectDropTarget: connect.dropTarget(),
  })
)(TaskList);
