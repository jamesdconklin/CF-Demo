import {
  POST_TASKS,
  REQUEST_TASKS,
  receiveTasks,
  requestTasks
} from 'Actions/TaskActions';

import config from 'Config';

import { getTasks, postTasks } from 'Utils/requests';

// TODO: Error handling. Will need alert middleware and reducer.
export default ({ dispatch }) => next => action => {
  const { username } = config;
  switch (action.type) {
    case REQUEST_TASKS:
      getTasks(username).then(
        (tasks) => dispatch(receiveTasks(tasks))
      ).catch(console.log);
      break;
    case POST_TASKS:
      postTasks(username, action.tasks).then(
        (tasks => dispatch(receiveTasks(tasks)))
      ).catch(console.log);
      break;
  }
  return next(action);
};
