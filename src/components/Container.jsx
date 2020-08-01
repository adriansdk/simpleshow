import React, { useState, useCallback, useEffect } from 'react';
import DragTargets from './targets/DragTargets';
import DraggableObjets from './bodyparts/DraggableObjects';
import Constants from './Megazord';
import update from 'immutability-helper';
import Background from '../assets/svg/hanger_background.svg';

export const Container = () => {
  const [targets, setTargets] = useState([
    { accepts: [Constants.ItemTypes.LEFTARM], lastDroppedItem: null },
    { accepts: [Constants.ItemTypes.RIGHTARM], lastDroppedItem: null },
    { accepts: [Constants.ItemTypes.CHEST], lastDroppedItem: null },
    { accepts: [Constants.ItemTypes.HEAD], lastDroppedItem: null },
  ]);
  const [boxes] = useState(Constants.BodyParts);

  const [vh, setVh] = useState(window.innerHeight);
  const [vw, setVw] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', updateViewport);
  });

  function updateViewport() {
    setVh(window.innerHeight);
    setVw(window.innerWidth);
  }

  const baseW = 1920;
  const baseH = 1080;

  function getPos(distance, dimension) {
    var viewportSize;
    var relativeDimension;
    if (dimension === 'width') {
      viewportSize = (vw / baseW) * 100;
      relativeDimension = viewportSize / 100;
      return relativeDimension * distance;
    }
    viewportSize = (vh / baseH) * 100;
    relativeDimension = viewportSize / 100;
    return relativeDimension * distance;
  }

  const [droppedBoxNames, setDroppedBoxNames] = useState([]);
  function isDropped(boxName) {
    return droppedBoxNames.indexOf(boxName) > -1;
  }
  const handleDrop = useCallback(
    (index, item) => {
      const { name } = item;
      setDroppedBoxNames(
        update(droppedBoxNames, name ? { $push: [name] } : { $push: [] })
      );
      setTargets(
        update(targets, {
          [index]: {
            lastDroppedItem: {
              $set: item,
            },
          },
        })
      );
    },
    [droppedBoxNames, targets]
  );

  // viewport width /1920

  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        width: '100%',
        height: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat ',
        position: 'relative',
        transform: 'scale(1)',
      }}
    >
      {boxes.map((object, index) => {
        return (
          <DragTargets
            accepts={object.target.accepts}
            lastDroppedItem={object.target.lastDroppedItem}
            onDrop={item => handleDrop(index, item)}
            height={object.height}
            width={object.width}
            xPos={object.target.xPos}
            yPos={object.target.yPos}
            key={index}
          />
        );
      })}
      {boxes.map((object, index) => {
        return (
          <DraggableObjets
            name={object.name}
            type={object.type}
            isDropped={isDropped(object.name)}
            key={index}
            url={object.url}
            xPos={getPos(object.xPos, 'width')}
            yPos={getPos(object.yPos, 'height')}
            height={object.height}
            width={object.width}
            vh={vh}
            vw={vw}
          />
        );
      })}
    </div>
  );
};
