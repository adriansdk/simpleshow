import React, { memo } from 'react';

export const DraggableObjectPreview = memo(({ name, index, url }) => {
  const styles = {
    display: 'inline-block',
  };

  return (
    <img
      src={url}
      className={'draggable'}
      key={index}
      alt={name}
      style={styles}
    ></img>
  );
});
