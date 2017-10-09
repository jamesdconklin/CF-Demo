import {
  SET_TASKS,
  FETCH_TASKS,
} from 'Actions/task_actions';

import compareTasks from 'Utils/compare';

const DEFAULT_STATE = {
  tasks: [],
  modified: false
};

export default (state = DEFAULT_STATE, action) => {
  Object.freeze(state);

  const { tasks } = action;

  switch (action.type) {
    case SET_TASKS:
      const modified = !compareTasks(state.tasks, tasks);
      return ({
        tasks,
        modified
      });
    case FETCH_TASKS:
      return ({
        tasks,
        modified: false
      });
    default:
      return Object.assign({}, state);
  }
};
