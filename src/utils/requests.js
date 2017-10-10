
import rp from 'request-promise';

// Commented code is a dummy store for whenever I can't access the
// API.

// const store = { tasks: [{id: 1, name: "foo"}] }

function getEndpoint(name) {
  return `http://cfassignment.herokuapp.com/${name}/tasks`;
}

// Strip out the isFocused field.
function fieldFilter({ name, id }) {
  return { name, id };
}

export function getTasks(name) {
  const uri = getEndpoint(name);
  const options = { uri, json: true };

  return rp(options);
  // const p = new Promise((resolve) => {console.log('fetch resolve'); resolve(store); });
  // return p;
}

export function postTasks(name, tasks) {
  const uri = getEndpoint(name);
  const options = {
    uri,
    method: "POST",
    body: { tasks: tasks.map(fieldFilter) },
    json: true
  };

  // const p = new Promise((resolve) => {store.tasks = tasks; resolve(store);});
  // return p;
  return rp(options);
}
