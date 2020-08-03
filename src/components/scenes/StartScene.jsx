import React from 'react';
import StartBox from '../../assets/png/start_overlay-box-large.png';
import StartButton from '../../assets/png/start_button.png';

function StartScene(props) {
  const StartBoxStyle = {
    position: 'absolute',
    left: '381px',
    top: '84px',
    height: 'auto',
    zIndex: '2',
  };
  const StartButtonStyle = {
    position: 'absolute',
    left: '828px',
    top: '800px',
    height: 'auto',
    zIndex: '2',
    cursor: 'pointer',
  };

  return (
    <div>
      <img src={StartBox} alt={'Start box'} style={StartBoxStyle}></img>
      <img
        src={StartButton}
        alt={'Start box'}
        style={StartButtonStyle}
        onClick={e => props.switchScene('assembly')}
      ></img>
    </div>
  );
}

export default StartScene;
