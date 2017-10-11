import React, { PureComponent } from 'react';

import FontAwesome from 'react-fontawesome';

import styles from 'CSS/Alert';

export default function Alert({ msg, removeAlert }) {
  return (
    <div className={styles.shiftRight}>
      <span className={styles.alert}>
        <span className={styles.centerVert}>
          <span className={styles.msg}>
            {msg}
          </span>
        </span>
        <span className={styles.centerVert}>
          <FontAwesome
            name="close"
            size="lg"
            onClick={removeAlert}
            className={styles.close}
          />
        </span>
      </span>
    </div>
  );
}
