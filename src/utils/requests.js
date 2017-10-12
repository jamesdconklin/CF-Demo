/*eslint-disable no-undef*/

import rp from 'request-promise';

import config from 'Config';

const { dummyApi } = config;

const store = {};

if (dummyApi) {
  store.tasks = {
    tasks: [
      { id: 'halifax', name: "Prima" },
      { id: 'quebec', name: "Deuxieme" },
      { id: 'winnipeg', name: "Tercero" },
    ],
  };
}

function getEndpoint(name) {
  return `http://cfassignment.herokuapp.com/${name}/tasks`;
}

// Strip out the isFocused field.
function fieldFilter({ name, id }) {
  return { name, id };
}

export function getTasks(name) {
  if (dummyApi) return new Promise((resolve) => resolve(store.tasks));

  const uri = getEndpoint(name);
  const options = { uri, json: true };

  return rp(options);
}

export function postTasks(name, tasks) {
  if (dummyApi) {
    return new Promise((resolve) => {
      store.tasks = tasks;
      return resolve(store);
    });
  }

  const uri = getEndpoint(name);
  const options = {
    uri,
    method: "POST",
    body: { tasks: tasks.map(fieldFilter) },
    json: true
  };

  return rp(options);
}
