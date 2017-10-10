import { combineReducers } from 'redux';
import TaskReducer from 'Reducers/TaskReducer';

const RootReducer = combineReducers({
  taskList: TaskReducer
});

export default RootReducer;
