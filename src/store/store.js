import { createStore } from 'redux';
import RootReducer from 'Reducers/RootReducer';
import RootMiddleware from 'Middlewares/RootMiddleware';

const configureStore = (preloadedState = {}) => (
  createStore(
    RootReducer,
    preloadedState,
    RootMiddleware
  )
);

export default configureStore;
