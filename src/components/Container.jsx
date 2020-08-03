import React, { useState, useCallback } from 'react';
import { DragTargets } from './targets/DragTargets';
import { DraggableObject } from './bodyparts/DraggableObject';
import Constants from './Megazord.js';
import update from 'immutability-helper';
import Background from '../assets/svg/hanger_background.svg';
import Instruction from './InstructionsBox';

export const Container = props => {
  const [draggables, setDraggables] = useState(Constants.BodyParts);
  const [extraDraggables] = useState(Constants.ExtraDraggables);
  const [droppedBoxNames, setDroppedBoxNames] = useState([]);
  const [complete, setComplete] = useState(false);

  const endScene = props.switchScene;
  const handleDrop = useCallback(
    (index, item) => {
      const { name } = item;
      setDroppedBoxNames(
        update(droppedBoxNames, name ? { $push: [name] } : { $push: [] })
      );
      setDraggables(
        update(draggables, {
          [index]: {
            target: {
              lastDroppedItem: {
                $set: item,
              },
            },
          },
        })
      );

      if (droppedBoxNames.length === draggables.length - 1 && !complete) {
        endScene('end');
        setComplete(true);
      }
    },
    [droppedBoxNames, draggables, endScene, complete]
  );

  if (complete && props.bonus & props.draggableBonus) {
    const extraDraggableObjects = draggables;
    extraDraggables.map(eachExtra => {
      return extraDraggableObjects.push(eachExtra);
    });
    setDraggables(extraDraggableObjects);
    setComplete(false);
  }

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
      {draggables.map((object, index) => {
        return (
          <div key={index}>
            <DragTargets
              accept={object.target.accepts}
              lastDroppedItem={object.target.lastDroppedItem}
              onDrop={item => handleDrop(index, item, draggables)}
              height={object.height}
              width={object.width}
              xPos={object.target.xPos}
              yPos={object.target.yPos}
              key={object.name}
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
      {complete && props.bonus ? (
        <button
          style={{
            left: '1632px',
            top: '458px',
          }}
          className={'btn'}
          onClick={e => {
            props.switchScene('bonus');
          }}
        >
          NEXT >
        </button>
      ) : null}
    </div>
  );
};
