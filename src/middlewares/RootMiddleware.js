import { applyMiddleware } from 'redux';
import TaskMiddleware from 'Middlewares/TaskMiddleware';

export default applyMiddleware(
  TaskMiddleware
);
