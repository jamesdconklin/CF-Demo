export const FETCH_TASKS = "FETCH_TASKS";
export const SET_TASKS = "SET_TASKS";
export const POST_TASKS = "POST_TASKS";
export const REQUEST_TASKS = "REQUEST_TASKS";

export const receiveTasks = (tasks) => ({
  type: FETCH_TASKS,
  tasks,
});

export const setTasks = (tasks) => ({
  type: SET_TASKS,
  tasks,
});

export const postTasks = (tasks) => ({
  type: POST_TASKS,
  tasks,
});

export const requestTasks = (tasks) => ({
  type: REQUEST_TASKS,
  tasks,
});
