import React, { PureComponent } from 'react';

export default ({alerts}) => (
  <ul>
    {alerts.map(alert => (<div>{alert.msg}</div>))}
  </ul>
);
