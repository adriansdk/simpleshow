import React from 'react';
import { useDrop } from 'react-dnd';

export const DragTargets = ({
  accept,
  height,
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

  const didDrop = true;
  console.log(lastDroppedItem);

  function renderObject(dropped) {
    if (lastDroppedItem !== null) {
      return <img src={url} key={key} alt={name} style={style} ref={key} />;
    } else {
      return <img src={url} key={key} alt={name} style={style2} ref={key} />;
    }
  }
  let filter = 'drop-shadow(4px 4px 6px red)';

  const isActive = isOver && canDrop;
  if (isActive) {
    filter = 'drop-shadow(4px 4px 6px green)';
  } else if (canDrop) {
    filter = 'drop-shadow(4px 4px 6px yellow)';
  }

  const style2 = {
    position: 'absolute',
    top: yPos,
    left: xPos,
    height: height,
    width: width,
    filter: filter,
    opacity: canDrop ? '0.4' : '0',
  };

  const style = {
    opacity: canDrop ? '0.4' : '1',
    visibility: canDrop || didDrop ? 'visible' : 'hidden',
    position: 'absolute',
    top: yPos,
    left: xPos,
    heigth: height,
    width: width,
    // filter: filter,
  };

  return <div>{renderObject(true)}</div>;
};
