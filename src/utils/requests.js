
import rp from 'request-promise';

function getEndpoint(name) {
  return `http://cfassignment.herokuapp.com/${name}/tasks`;
}

export function getTasks(name) {
  const uri = getEndpoint(name);
  const options = { uri, json: true };

  return rp(options);
}

export function postTasks(name, tasks) {
  const uri = getEndpoint(name);
  const options = {
    uri,
    method: "POST",
    body: { tasks },
    json: true
  };

  return rp(options);
}
