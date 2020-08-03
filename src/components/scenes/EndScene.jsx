import React from 'react';
import EndBox from '../../assets/png/feedback_overlay-box-large.png';

function EndScene(props) {
  const EndBoxStyle = {
    position: 'absolute',
    left: '95px',
    top: '13px',
    height: 'auto',
    zIndex: '2',
  };

  return (
    <div>
      <img src={EndBox} alt={'End box'} style={EndBoxStyle}></img>
    </div>
  );
}

export default EndScene;
