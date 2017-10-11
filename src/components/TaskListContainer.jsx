import { connect } from 'react-redux';
import React from 'react';

import {
  receiveTasks,
  deleteTask,
  renameTask,
  postTasks,
  newTask,
  moveTask,
} from 'Actions/TaskActions';

import TaskList from 'Components/TaskList';

const mapStateToProps = ({ taskList }) => {
  const { tasks, modified } = taskList;
  return { tasks, modified };
};

const mapDispatchToProps = (dispatch) => ({
  deleteTask: (index) => dispatch(deleteTask(index)),
  renameTask: (index, name) => dispatch(renameTask(index, name)),
  moveTask: (fromIndex, toIndex) => dispatch(moveTask(fromIndex, toIndex)),
  persist: (tasks) => dispatch(postTasks(tasks)),
  newTask: () => dispatch(newTask()),
  receiveTasks: ({ modified, tasks }) => dispatch(
    receiveTasks({ tasks, modified })
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
