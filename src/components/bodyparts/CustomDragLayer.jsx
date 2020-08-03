import React from 'react';
import { useDragLayer } from 'react-dnd';
import { DraggableObjectPreview } from './DraggableObjectPreview';

function getItemStyles(initialOffset, currentOffset, scale) {
  if (!initialOffset || !currentOffset) {
    return {
      display: 'none',
    };
  }
  let { x, y } = currentOffset;
  if (scale > 1) {
    x = currentOffset.x * scale;
    y = currentOffset.y * scale;
  } else {
    x = currentOffset.x / scale;
    y = currentOffset.y / scale;
  }
  const transform = `translate(${x}px, ${y}px)`;
  return {
    transform,
    WebkitTransform: transform,
  };
}
export const CustomDragLayer = props => {
  const {
    itemType,
    isDragging,
    item,
    initialOffset,
    currentOffset,
  } = useDragLayer(monitor => ({
    clientOffset: monitor.getClientOffset(),
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    initialOffset: monitor.getInitialSourceClientOffset(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  }));

  function renderItem() {
    switch (itemType) {
      case item.type:
        return (
          <DraggableObjectPreview
            name={item.name}
            type={item.type}
            key={item.index}
            url={item.url}
          />
        );
      default:
        return null;
    }
  }
  if (!isDragging) {
    return null;
  }
  const layerStyles = {
    position: 'fixed',
    pointerEvents: 'none',
    zIndex: 100,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
  };
  return (
    <div style={layerStyles}>
      <div style={getItemStyles(initialOffset, currentOffset, props.scale)}>
        {renderItem()}
      </div>
    </div>
  );
};
