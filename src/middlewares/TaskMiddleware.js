import {
  POST_TASKS,
  REQUEST_TASKS,
  receiveTasks,
  requestTasks
} from 'Actions/TaskActions';

import { newAlert } from 'Actions/AlertActions';

import config from 'Config';

import { getTasks, postTasks } from 'Utils/requests';

export default ({ dispatch }) => next => action => {
  const { username } = config;
  switch (action.type) {
    case REQUEST_TASKS:
      getTasks(username).then(
        (tasks) => {
          dispatch(newAlert("Tasks successfully loaded."));
          dispatch(receiveTasks(tasks));
      }).catch(err => {
        dispatch(newAlert("Could not retrieve tasks from server. Retrying."));
        setTimeout(() => dispatch(requestTasks()), 2000);
      });
      break;
    case POST_TASKS:
      postTasks(username, action.tasks).then(
        tasks => {
          dispatch(receiveTasks(tasks))
          dispatch(newAlert("Tasks successfuly saved."));
      }).catch(err => dispatch(
        newAlert("Could not post tasks to server. Please try again.")
      ));
      break;
  }
  return next(action);
};
