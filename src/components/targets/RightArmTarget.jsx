import React from 'react';
import { DropTarget } from 'react-dnd';

const style = {
  height: '356px',
  width: '127px',
  color: 'white',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  float: 'left',
  border: '5px solid',
};
const RightArmTarget = ({ canDrop, isOver, connectDropTarget }) => {
  const isActive = canDrop && isOver;
  let borderColor = '#222';
  if (isActive) {
    borderColor = 'darkgreen';
  } else if (canDrop) {
    borderColor = 'darkkhaki';
  }
  return (
    <div ref={connectDropTarget} style={{ ...style, borderColor }}>
      {isActive ? 'Release to drop' : 'Drag a box here'}
    </div>
  );
};
export default DropTarget(
  'box',
  {
    drop: () => ({ name: 'RightArmTarget' }),
  },
  (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  })
)(RightArmTarget);
