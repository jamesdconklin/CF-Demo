import uuidv1 from 'uuid/v1';
import update from 'immutability-helper';

import {
  DELETE_TASK,
  RECEIVE_TASKS,
  RENAME_TASK,
  NEW_TASK,
  MOVE_TASK,
} from 'Actions/TaskActions';

import compareTasks from 'Utils/compare';

export const DEFAULT_STATE = {
  tasks: [],
  modified: false
};

export default (state = DEFAULT_STATE, action) => {
  Object.freeze(state);

  const { tasks, index, name, fromIndex, toIndex, modified } = action;

  //TODO Use React Immutability Helper for the state transitions.
  switch (action.type) {
    case RECEIVE_TASKS:
      return ({
        tasks: tasks || [],
        modified
      });
    case DELETE_TASK:
      const newTasks = state.tasks.slice(0, index).concat(
        state.tasks.slice(index + 1)
      );
      return ({
        tasks: newTasks,
        modified: true
      });
    case RENAME_TASK:

      let renamedTask = state.tasks[index];
      if (!renamedTask) return state;
      renamedTask = Object.assign({}, state.tasks[index], { name });

      const renamedTasks = state.tasks.slice(0, index).concat(
        renamedTask
      ).concat(
        state.tasks.slice(index+1)
      );
      return ({
        modified: true,
        tasks: renamedTasks
      });
    case NEW_TASK:
      return ({
        modified: true,
        tasks: state.tasks.concat(
          {
            id: uuidv1(), isFocused: true, name: "NEW TASK"
          }
        )
      });

    default:
      return Object.assign({}, state);
  }
};
