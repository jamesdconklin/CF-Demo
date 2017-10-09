import {
  POST_TASKS,
  REQUEST_TASKS,
  receiveTasks
} from 'Actions/task_actions';

import { username } from 'Config';

import { getTasks, postTasks } from 'Utils/requests';

export default ({ dispatch }) => next => action => {
  //TODO: Error handling.
  switch (action.type) {
    case REQUEST_TASKS:
      getTasks(username).then((tasks) => dispatch(receiveTasks(tasks)));
      break;
    case POST_TASKS:
      postTasks(username, action.tasks).then(
        (tasks => dispatch(receiveTasks(tasks)))
      );
      break;
  }
  return next(action);
};
