import React, { PureComponent } from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import { RIEInput } from 'riek';
import FontAwesome from 'react-fontawesome';

import { ItemTypes } from 'Utils/constants';
import styles from 'CSS/Task.css';

const taskSource = {
  beginDrag(props) {
    const { id, findTask } = props;
    return {
      id,
      draggedIndex: findTask(id).index,
    };
  },

  endDrag(props, monitor) {
      const { id: droppedId, draggedIndex } = monitor.getItem();
      const didDrop = monitor.didDrop();

      if (!didDrop) {
        //cancel if dropped outside legal area.
        props.moveTask(droppedId, draggedIndex);
      } else {
        props.commitMove();
      }
  },
};

const taskTarget = {
  canDrop: () => false,

  hover(props, monitor) {
    const { id: draggedId } = monitor.getItem();
    const { id: overId, index : overIndex } = props;

    if (draggedId !== overId) {
      props.moveTask(draggedId, overIndex);
    }
  }
};

class Task extends PureComponent {
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
    const {
      index, isFocused, isDragging, connectDragSource, connectDropTarget,
       } = this.props;
    const task = (
      <div style={{opacity: isDragging? 0 : 1}} className={styles.task}>
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
    return connectDragSource(connectDropTarget(task));
  }
}

export default DropTarget(
  ItemTypes.TASK,
  taskTarget,
  connect => ({
	   connectDropTarget: connect.dropTarget(),
  })
)(
  DragSource(
    ItemTypes.TASK,
    taskSource,
    (connect, monitor) => ({
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging(),
    })
  )(Task)
);
