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
    this.getDeleteFn = this.getDeleteFn.bind(this);
  }

  // I'd prefer to keep the changes confined to component state until we stop
  // editing, but the afterFinish prop for the RIEK input fires before the state
  // change. This'll have to suffice for demo purposes.
  onChange({ name }) {
    const { renameTask, index } = this.props;
    renameTask(index, name);
  }

  componentWillReceiveProps({ name }) {
    if (name !== this.state.name) {
      this.setState({ name });
    }
  }

  onNewTask(ref) {
     this.ref = ref;
  }

  componentDidMount() {
    if (this.props.isFocused) {
      this.ref.startEditing();
    }
  }

  getDeleteFn(idx) {
    return (evt) => {
      this.props.deleteTask(idx);
    };
  }

  render() {
    const { name } = this.state;
    const { index, isFocused } = this.props;
    return (
      <div className={styles.task}>
        <div className={styles.left}>
          <span className={styles.dotContainer}>
            <FontAwesome name="ellipsis-v"  size="lg" className={styles.dots}/>
            <FontAwesome name="ellipsis-v"  size="lg" className={styles.dots}/>
            <FontAwesome name="ellipsis-v"  size="lg" className={styles.dots}/>
          </span>
          <RIEInput
            ref={this.onNewTask}
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
