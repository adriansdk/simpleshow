import React from 'react';
import { useDrop } from 'react-dnd';

export const DragTargets = ({
  accept,
  heigth,
  onDrop,
  width,
  xPos,
  yPos,
  url,
  name,
  lastDroppedItem,
}) => {
  const [{ isOver, canDrop }, key] = useDrop({
    accept,
    drop: onDrop,
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  const didDrop = false;
  function renderObject(dropped) {
    if (didDrop === true) {
      return <img src={url} key={key} alt={name} style={style} ref={key}></img>;
    } else {
      return <img src={url} key={key} alt={name} style={style} ref={key}></img>;
    }
  }
  let boxShadow = 'black 5px 5px 10px';

  const isActive = isOver && canDrop;
  if (isActive) {
    boxShadow = 'darkgreen 5px 5px 10px';
  } else if (canDrop) {
    boxShadow = 'darkkhaki 5px 5px 10px';
  }
  const style = {
    opacity: canDrop ? '0.4' : '1',
    visibility: canDrop || didDrop ? 'visible' : 'hidden',
    position: 'absolute',
    top: yPos,
    left: xPos,
    heigth: heigth,
    width: width,
    boxShadow: boxShadow,
  };

  return <div>{renderObject(true)}</div>;
};
