import React, { PureComponent } from 'react';
import { RIEInput } from 'riek';
import FontAwesome from 'react-fontawesome';

import styles from 'CSS/Task.css';

export default class Task extends PureComponent {
  constructor(props) {
    super(props);
    const { name, isFocused } = props;
    this.state = {
      name
    };
    this.onChange = this.onChange.bind(this);
    this.onNewTask = this.onNewTask.bind(this);
    this.onStopEditing = this.onStopEditing.bind(this);
    this.getDeleteFn = this.getDeleteFn.bind(this);
  }

  onStopEditing() {
    this.setState({ isFocused: false });
  }

  onChange({ name }) {
    this.setState({ name });
  }

  onNewTask(ref) {
    ref.startEditing();
  }

  getDeleteFn(idx) {
    return (evt) => {
      this.props.deleteTask(idx);
    };
  }

  render() {
    const { name, isFocused } = this.state;
    const { index } = this.props;
    return (
      <div className={styles.task}>
        <div className={styles.left}>
          <span className={styles.dotContainer}>
            <FontAwesome name="ellipsis-v"  size="lg" className={styles.dots}/>
            <FontAwesome name="ellipsis-v"  size="lg" className={styles.dots}/>
            <FontAwesome name="ellipsis-v"  size="lg" className={styles.dots}/>
          </span>
          <RIEInput
            ref={this.props.isFocused ? this.onNewTask : null}
            className={styles.taskLabel}
            classEditing={null}
            value={name}
            propName="name"
            change={this.onChange}
            afterFinish={this.onStopEditing}
          />
        </div>
        <div className={styles.right}>
          <FontAwesome
            name="trash"
            size="lg"
            className={styles.trash}
            onClick={this.getDeleteFn(index)}
          />
        </div>
      </div>
    );
  }
}
