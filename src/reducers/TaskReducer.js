import {
  DELETE_TASK,
  SET_TASKS,
  FETCH_TASKS,
} from 'Actions/TaskActions';

import compareTasks from 'Utils/compare';

const DEFAULT_STATE = {
  tasks: [],
  modified: false
};

export default (state = DEFAULT_STATE, action) => {
  Object.freeze(state);

  const { tasks, index } = action;

  switch (action.type) {
    case SET_TASKS:
      const modified = !compareTasks(state.tasks, tasks);
      return ({
        tasks,
        modified
      });
    case FETCH_TASKS:
      return ({
        tasks: tasks || [],
        modified: false
      });
    case DELETE_TASK:
      const newTasks = state.tasks.slice(0, index).concat(
        state.tasks.slice(index + 1)
      );
      return ({
        tasks: newTasks,
        modified: true
      });
    default:
      return Object.assign({}, state);
  }
};
