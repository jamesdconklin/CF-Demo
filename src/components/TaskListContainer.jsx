import { connect } from 'react-redux';
import React from 'react';

import { deleteTask } from 'Actions/TaskActions';
import TaskList from 'Components/TaskList';

const mapStateToProps = ({ taskList }) => {
  const { tasks, modified } = taskList;
  return { tasks, modified };
};

const mapDispatchToProps = (dispatch) => ({
  deleteTask: (index) => dispatch(deleteTask(index)),
  renameTask: () => console.log('rename'),
  moveTask: () => console.log('move')
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
