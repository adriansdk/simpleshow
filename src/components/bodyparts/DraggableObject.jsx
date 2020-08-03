import React, { useEffect } from 'react';
import { useDrag } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';

export const DraggableObject = ({
  name,
  type,
  isDropped,
  index,
  url,
  xPos,
  yPos,
  height,
  width,
}) => {
  const [{ isDragging }, drag, preview] = useDrag({
    item: { name, type, url, xPos, yPos, height, width, index },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
    end: (item, monitor) => {
      if (monitor.didDrop()) {
        console.log(`You attached ${item.name}!`);
      }
    },
  });

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, [preview]);

  const style = {
    visibility: isDropped ? 'hidden' : 'visible',
    opacity: isDragging ? '0.3' : '1',
    position: 'absolute',
    top: yPos,
    left: xPos,
    heigth: height,
    width: width,
  };
  return (
    <img
      src={url}
      className={'draggable'}
      key={index}
      alt={name}
      style={{ ...style }}
      ref={drag}
    ></img>
  );
};
