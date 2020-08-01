import React from 'react';
import { DragSource } from 'react-dnd';
import rightArm from '../../assets/svg/simplemech arm 2.svg';

const RightArm = ({ name, isDragging, connectDragSource }) => {
  const opacity = isDragging ? 0.4 : 1;
  const width = '85%';
  const height = '85%';

  return (
    <div ref={connectDragSource} style={{ opacity }}>
      <img src={rightArm} alt="Right-arm" style={{ width, height }} />
    </div>
  );
};
export default DragSource(
  'box',
  {
    beginDrag: props => ({ name: props.name }),
    endDrag(props, monitor) {
      const item = monitor.getItem();
      const dropResult = monitor.getDropResult();
      if (dropResult) {
        alert(`You dropped ${item.name} into ${dropResult.name}!`);
      }
    },
  },
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  })
)(RightArm);
