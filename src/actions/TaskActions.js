export const REQUEST_TASKS = "REQUEST_TASKS";
export const RECEIVE_TASKS = "RECEIVE_TASKS";
export const POST_TASKS = "POST_TASKS";
export const DELETE_TASK = "DELETE_TASK";
export const RENAME_TASK = "RENAME_TASK";
export const NEW_TASK = "NEW_TASK";

export const requestTasks = () => ({
  type: REQUEST_TASKS,
});

export const receiveTasks = ({tasks}) => ({
  type: RECEIVE_TASKS,
  tasks,
});

export const postTasks = (tasks) => ({
  type: POST_TASKS,
  tasks,
});

export const deleteTask = (index) => ({
  type: DELETE_TASK,
  index
});

export const renameTask = (index, name) => ({
  type: RENAME_TASK,
  index,
  name
});
export const newTask = (name) => ({
  type: NEW_TASK,
  name
});
