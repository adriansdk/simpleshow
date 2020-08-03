import React from 'react';
import { useDrag } from 'react-dnd';
export const DraggableObject = ({
  name,
  type,
  isDropped,
  index,
  url,
  xPos,
  yPos,
  heigth,
  width,
}) => {
  const [{ isDragging }, drag] = useDrag({
    item: { name, type },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
    end: (item, monitor) => {
      if (monitor.didDrop()) {
        console.log(`You attached ${item.name}!`);
      }
    },
  });
  const style = {
    visibility: isDropped ? 'hidden' : 'visible',
    opacity: isDragging ? '0.3' : '1',
    position: 'absolute',
    top: yPos,
    left: xPos,
    heigth: heigth,
    width: width,
  };
  return (
    <img src={url} key={index} alt={name} style={{ ...style }} ref={drag}></img>
  );
};
