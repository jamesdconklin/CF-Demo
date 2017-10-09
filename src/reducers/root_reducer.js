import { combineReducers } from 'redux';
import TaskReducer from 'Reducers/task_reducer';

const RootReducer = combineReducers({
  tasks: TaskReducer
});

export default RootReducer;
