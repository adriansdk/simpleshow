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

  const closeButtonStyle = {
    position: 'absolute',
    left: '1430px',
    top: '189px',
    width: '60px',
    height: '69px',
    zIndex: '3',
  };
  return (
    <div>
      <img
        src={EndBox}
        alt={'End box'}
        useMap="#image-map"
        style={EndBoxStyle}
      ></img>

      <map name="image-map">
        <area
          onClick={e => {
            props.switchScene('assembly');
            props.setBonus(true);
          }}
          style={closeButtonStyle}
          alt="Close button"
          shape="rect"
        />
      </map>
    </div>
  );
}

export default EndScene;
