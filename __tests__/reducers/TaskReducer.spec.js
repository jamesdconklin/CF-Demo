import {
  newTask, NEW_TASK,
  renameTask, RENAME_TASK,
  receiveTasks, RECEIVE_TASKS,
  deleteTask, DELETE_TASK,
} from '../../src/actions/TaskActions.js';

import TaskReducer, { DEFAULT_STATE } from '../../src/reducers/TaskReducer.js';

const SAMPLE_STATE = {
  tasks: [
    { id: 'halifax', name: "Prima" },
    { id: 'quebec', name: "Deuxieme" },
    { id: 'winnipeg', name: "Tercero" },
  ],
  modified: false,
};

describe('TaskReducer', () => {
  it('should return the initial state.', () => {
    expect(TaskReducer(undefined, {})).toEqual(DEFAULT_STATE);
  });

  it('should receive tasks list and modified flag.', () => {
    expect(TaskReducer(
      undefined,
      receiveTasks(SAMPLE_STATE)
    )).toEqual(SAMPLE_STATE);
  });

  it('should rename tasks.', () => {
    const renameSuccResult = TaskReducer(
      SAMPLE_STATE,
      renameTask(1, "Quatrieme")
    );
    const { tasks, modified } = renameSuccResult;
    const { name } = tasks[1];

    expect(modified).toBeTruthy();
    expect(name).toEqual("Quatrieme");
  });

  it('should return original state when renaming out-of-bounds.', () => {
    expect(TaskReducer(
      SAMPLE_STATE,
      renameTask(4, "Whatever!")
    )).toBe(SAMPLE_STATE);
  });

  it('should create and postfix new tasks.', () => {
    const peanoFive = 'S(S(S(S(S(0)))))';
    const postCreate = TaskReducer(
      SAMPLE_STATE,
      newTask(peanoFive)
    );

    expect(postCreate.tasks.length).toEqual(4);
    expect(postCreate.tasks[3].name).toEqual(peanoFive);
  });

  it ('defaults new tasks\' names to "NEW TASK."', () => {
    expect(TaskReducer(undefined, newTask()).tasks[0].name).toEqual("NEW TASK");
  });

  it ('can delete from the front of the list...', () => {
    const deleteFromBeginning = TaskReducer(
      {
        tasks: [1,2,3],
        modified: false
      },
      deleteTask(0)
    );

    expect(deleteFromBeginning.tasks).toEqual([2,3]);
  });

  it ('...and from the middle...', () => {
    const deleteFromMiddle = TaskReducer(
      {
        tasks: [1,2,3],
        modified: false
      },
      deleteTask(1)
    );

    expect(deleteFromMiddle.tasks).toEqual([1,3]);
  });

  it ('...and from the end...', () => {
    const deleteFromMiddle = TaskReducer(
      {
        tasks: [1,2,3],
        modified: false
      },
      deleteTask(2)
    );

    expect(deleteFromMiddle.tasks).toEqual([1,2]);
  });

  it ('...and fail to delete nonexistent indices.', () => {
    const deleteFromMiddle = TaskReducer(
      {
        tasks: [1,2,3],
        modified: false
      },
      deleteTask(4)
    );

    expect(deleteFromMiddle.tasks).toEqual([1,2,3]);
  });
});
