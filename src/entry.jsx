import React, { PureComponent } from 'react';
import ReactDom from 'react-dom';

import Root from 'Components/Root';
import configureStore from 'Store/store';
import { requestTasks } from 'Actions/TaskActions';


// import Demo from 'Demo';

import { getTasks, postTasks  } from './utils/requests';

document.addEventListener("DOMContentLoaded",
  () => {
    const preloadedState = {
      taskList: {
        tasks: [],
        modified: false
      }
    };
    const store = configureStore(preloadedState);
    const root = document.getElementById("root");
    window.store = store;

    store.dispatch(requestTasks());
    ReactDom.render(<Root store={store}/>, root);
  }
);
