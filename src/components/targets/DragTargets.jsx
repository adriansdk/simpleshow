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

  function renderTargets() {
    if (lastDroppedItem !== null) {
      return <img src={url} key={key} alt={name} style={attached} ref={key} />;
    } else {
      return (
        <img src={url} key={key} alt={name} style={notAttached} ref={key} />
      );
    }
  }

  const isActive = isOver && canDrop;
  let filter = 'drop-shadow(4px 4px 6px red)';
  if (isActive) {
    filter = 'drop-shadow(4px 4px 6px green)';
  } else if (canDrop) {
    filter = 'drop-shadow(4px 4px 6px yellow)';
  }

  const notAttached = {
    position: 'absolute',
    top: yPos,
    left: xPos,
    height: height,
    width: width,
    filter: filter,
    opacity: canDrop ? '0.4' : '0',
  };

  const didDrop = true;
  const attached = {
    opacity: canDrop ? '0.4' : '1',
    visibility: canDrop || didDrop ? 'visible' : 'hidden',
    position: 'absolute',
    top: yPos,
    left: xPos,
    heigth: height,
    width: width,
  };

  return <div>{renderTargets()}</div>;
};
