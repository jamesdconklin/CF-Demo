import React, { PureComponent } from 'react';

import FontAwesome from 'react-fontawesome';

import styles from 'CSS/Alert';

export default function Alert({ msg, removeAlert }) {
  return (
    <div>
      <div className={styles.alert}>
        <div className={styles.centerVert}>
          <span className={styles.msg}>
            {msg}
          </span>
        </div>
        <div className={styles.centerVert}>
          <FontAwesome
            name="close"
            size="lg"
            onClick={removeAlert}
            className={styles.close}
          />
        </div>
      </div>
    </div>
  );
}
