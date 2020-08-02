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

  const [scale, setScale] = useState(getScale());

  useEffect(() => {
    window.addEventListener('resize', updateViewport);
  });

  function getScale() {
    const baseScale = 1;
    let widthDifference = ((window.innerWidth - 1920) / 1920) * 100.0;
    let heightDifference = ((window.innerHeight - 1080) / 1080) * 100.0;
    let decimalWidthDifference = (widthDifference /= 100);
    let decimalHeightDifference = (heightDifference /= 100);
    if (Math.abs(decimalHeightDifference) > Math.abs(decimalWidthDifference)) {
      return baseScale + heightDifference;
    } else if (
      Math.abs(decimalHeightDifference) < Math.abs(decimalWidthDifference)
    ) {
      return baseScale + widthDifference;
    }
  }

  function updateViewport() {
    setScale(getScale);
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
        width: '1920px',
        height: '1080px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'relative',
        transform: `scale(${scale})`,
        transformOrigin: 'left top',
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
            url={object.url}
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
            yPos={object.yPos}
            xPos={object.xPos}
            height={object.height}
            width={object.width}
          />
        );
      })}
    </div>
  );
};
