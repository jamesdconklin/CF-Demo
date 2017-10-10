import React, { PureComponent } from 'react';

export default ({alerts}) => (
  <ul>
    {alerts.map(({id, msg}) => (<div key={id}>{msg}</div>))}
  </ul>
);
