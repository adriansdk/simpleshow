import React from 'react';
import { DropTarget } from 'react-dnd';
export const DropTargets = ({
  accepts,
  isOver,
  canDrop,
  connectDropTarget,
  heigth,
  width,
  xPos,
  yPos,
  url,
  key,
  name,
}) => {
  let boxShadow = 'black 5px 5px 10px';
  const isActive = isOver && canDrop;
  if (isActive) {
    boxShadow = 'darkgreen 5px 5px 10px';
  } else if (canDrop) {
    boxShadow = 'darkkhaki 5px 5px 10px';
  }
  const aksgo = {
    position: 'absolute',
    top: yPos,
    left: xPos,
    heigth: heigth,
    width: width,
    // boxShadow: boxShadow,
  };
  return connectDropTarget(
    <img src={url} key={key} alt={name} style={aksgo}></img>
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
