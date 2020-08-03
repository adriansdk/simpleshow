import React, { useState, useCallback } from 'react';
import { DragTargets } from './targets/DragTargets';
import { DraggableObject } from './bodyparts/DraggableObject';
import Constants from './Megazord.js';
import update from 'immutability-helper';
import Background from '../assets/svg/hanger_background.svg';
import Instruction from './InstructionsBox';

export const Container = props => {
  const [boxes, setBoxes] = useState(Constants.BodyParts);
  const [droppedBoxNames, setDroppedBoxNames] = useState([]);

  const endScene = props.switchScene;
  const handleDrop = useCallback(
    (index, item) => {
      const { name } = item;
      setDroppedBoxNames(
        update(droppedBoxNames, name ? { $push: [name] } : { $push: [] })
      );
      setBoxes(
        update(boxes, {
          [index]: {
            target: {
              lastDroppedItem: {
                $set: item,
              },
            },
          },
        })
      );

      if (droppedBoxNames.length === boxes.length - 1) {
        endScene('end');
      }
    },
    [droppedBoxNames, boxes, endScene]
  );

  function isDropped(boxName) {
    return droppedBoxNames.indexOf(boxName) > -1;
  }

  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        width: '1920px',
        height: '1080px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute',
        zIndex: '1',
        top: '0',
        left: '0',
      }}
    >
      <Instruction></Instruction>
      {boxes.map((object, index) => {
        return (
          <div>
            <DragTargets
              accept={object.target.accepts}
              lastDroppedItem={object.target.lastDroppedItem}
              onDrop={item => handleDrop(index, item)}
              height={object.height}
              width={object.width}
              xPos={object.target.xPos}
              yPos={object.target.yPos}
              key={index}
              index={index}
              url={object.url}
            ></DragTargets>
            <DraggableObject
              name={object.name}
              type={object.type}
              isDropped={isDropped(object.name)}
              index={index}
              key={index}
              url={object.url}
              yPos={object.yPos}
              xPos={object.xPos}
              height={object.height}
              width={object.width}
            ></DraggableObject>
          </div>
        );
      })}
    </div>
  );
};
