import { combineReducers } from 'redux';
import TaskReducer from 'Reducers/TaskReducer';
import AlertReducer from 'Reducers/AlertReducer';

const RootReducer = combineReducers({
  taskList: TaskReducer,
  alerts: AlertReducer
});

export default RootReducer;
