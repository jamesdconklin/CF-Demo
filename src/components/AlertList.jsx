import React, { PureComponent } from 'react';

import Alert from 'Components/Alert';

import styles from 'CSS/AlertList';

export default function AlertList(props) {
  return (
    <ul className={styles.alertList}>
      {
        props.alerts.map(
          ({ msg, id }, index) => (
            <Alert
              key={id}
              msg={msg}
              removeAlert={(e) => props.removeAlert(index)}
              />
          )
        )
      }
    </ul>
  );
}
