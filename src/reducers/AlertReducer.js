import uuidv1 from 'uuid/v1';

import { REMOVE_ALERT, NEW_ALERT } from 'Actions/AlertActions';

const DEFAULT_STATE = [];

export default (state = DEFAULT_STATE, action) => {
  const { index, msg} = action;


  //TODO Use React Immutability Helper for the state transitions.
  switch (action.type) {
    case REMOVE_ALERT:
      const newAlerts = state.slice(0, index).concat(state.slice(index + 1));
      return newAlerts;
    case NEW_ALERT:
      return state.concat({ msg, id: uuidv1() });

    default:
      return state;
  }
};
