import { createStore } from 'redux';
import RootReducer from 'Reducers/root_reducer';
import RootMiddleware from 'Middlewares/root_middleware';

const configureStore = (preloadedState = {}) => (
  createStore(
    RootReducer,
    preloadedState,
    RootMiddleware
  )
);

export default configureStore;
