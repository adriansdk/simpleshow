import React from 'react';
import { DropTarget } from 'react-dnd';
export const DropTargets = ({
  accepts,
  isOver,
  canDrop,
  connectDropTarget,
  height,
  width,
  xPos,
  yPos,
}) => {
  const style = {
    height: height,
    width: width,
    color: 'white',
    position: 'absolute',
    left: xPos,
    top: yPos,
    border: '5px solid black',
  };
  const isActive = isOver && canDrop;
  let borderColor = 'black';
  if (isActive) {
    borderColor = 'darkgreen';
  } else if (canDrop) {
    borderColor = 'darkkhaki';
  }
  return connectDropTarget(
    <div style={{ ...style, borderColor }}>
      {isActive
        ? 'Release to drop'
        : `This dustbin accepts: ${accepts.join(', ')}`}
    </div>
  );
};
export default DropTarget(
  props => props.accepts,
  {
    drop(props, monitor) {
      props.onDrop(monitor.getItem());
    },
  },
  (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  })
)(DropTargets);
