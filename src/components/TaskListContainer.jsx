import { connect } from 'react-redux';
import React from 'react';

import {
  deleteTask,
  renameTask,
  postTasks,
  newTask
} from 'Actions/TaskActions';

import TaskList from 'Components/TaskList';

const mapStateToProps = ({ taskList }) => {
  const { tasks, modified } = taskList;
  return { tasks, modified };
};

const mapDispatchToProps = (dispatch) => ({
  deleteTask: (index) => dispatch(deleteTask(index)),
  renameTask: (index, name) => dispatch(renameTask(index, name)),
  moveTask: () => console.log('move'),
  persist: (tasks) => dispatch(postTasks(tasks)),
  newTask: () => dispatch(newTask())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
