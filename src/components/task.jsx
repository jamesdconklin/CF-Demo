import React, { PurecComponent } from 'react';

class Task extends PureCommponent {
  constructor(props) {
    super(props);
    const { name, id } = props;
  }
}
