import {
  newTask, NEW_TASK,
  renameTask, RENAME_TASK,
  receiveTasks, RECEIVE_TASKS,
  deleteTask, DELETE_TASK,
} from '../../src/actions/TaskActions.js';

import TaskReducer, { DEFAULT_STATE } from '../../src/reducers/TaskReducer.js';

/*
  We need to cover:

   - Receiving tasks from API.
   - Deleting a task.
      Beginning, Middle, end, miss
   - Renaming a Task
      valid + invalid ID.
   - Creating a Task
    Bogus Action./
*/

const SAMPLE_STATE = {
  tasks: [
    { id: 'halifax', name: "Prima" },
    { id: 'quebec', name: "Deuxieme" },
    { id: 'winnipeg', name: "Tercero" },
  ],
  modified: false,
};

describe('TaskReducer', () => {
  it('should return the initial state', () => {
    expect(TaskReducer(undefined, {})).toEqual(DEFAULT_STATE);
  });
});
