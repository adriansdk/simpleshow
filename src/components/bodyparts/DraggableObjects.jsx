import React from 'react';
import { DragSource } from 'react-dnd';

export const LeftArm = ({
  name,
  isDropped,
  isDragging,
  connectDragSource,
  key,
  url,
  xPos,
  yPos,
  heigth,
  width,
}) => {
  const style = {
    visibility: isDropped ? 'hidden' : 'visible',
    opacity: isDragging ? '0.3' : '1',
    position: 'absolute',
    top: yPos,
    left: xPos,
    heigth: heigth,
    width: width,
  };
  return connectDragSource(
    <img src={url} key={key} alt={name} style={style}></img>
  );
};
export default DragSource(
  props => props.type,
  {
    beginDrag: props => ({ name: props.name }),
  },
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  })
)(LeftArm);
