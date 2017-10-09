import React, { PureComponent } from 'react';
import ReactDom from 'react-dom';

import Root from 'Components/root';
import configureStore from 'Store/store';

// import Demo from 'Demo';

import { getTasks, postTasks  } from './utils/requests';

document.addEventListener("DOMContentLoaded",
  () => {
    const preloadedState = {
      tasks: {
        tasks: [],
        modified: false
      }
    };
    const store = configureStore(preloadedState);
    const root = document.getElementById("root");


    console.log("We're in play");
    ReactDom.render(<Root store={store}/>, root);
  }
);
