import { applyMiddleware } from 'redux';
import TaskMiddleware from 'Middlewares/task_middleware';

export default applyMiddleware(
  TaskMiddleware
);
