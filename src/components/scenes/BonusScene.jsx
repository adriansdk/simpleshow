import React from 'react';
import Logo from '../../assets/png/logo.png';

function BonusScene(props) {
  const BonusStyle = {
    position: 'relative',
    height: '100%',
    width: '100%',
    left: '1920px',
    backgroundColor: 'white',
    zIndex: '4',
    WebkitAnimationDelay: '2s',
    WebkitAnimation: 'slide 2s backwards',
    animation: 'slide 2s forwards',
    animationDelay: '0.5s',
  };

  const ButtonStyle = {
    position: 'relative',
    height: '50px',
    width: '50%',
    left: '1920px',
    margin: '0px 25%',
    top: '585px',
    zIndex: '5',
    WebkitAnimationDelay: '2s',
    WebkitAnimation: 'slide 2s backwards',
    animation: 'slide 2s forwards',
    animationDelay: '0.5s',
  };

  const transitionStyle = {
    position: 'absolute',
    overflow: 'hidden',
    width: '100%',
    height: '100%',
  };

  return (
    <React.Fragment>
      <div style={transitionStyle}>
        <img
          src={Logo}
          alt={'End box'}
          useMap="#image-map"
          style={BonusStyle}
          id={'slide'}
        ></img>
      </div>
      <div style={transitionStyle}>
        <button
          onClick={e => {
            props.setDraggableBonus(true);
            props.switchScene('assembly');
          }}
          style={ButtonStyle}
          className={'btn'}
        >
          Click me for a bonus
        </button>
      </div>
    </React.Fragment>
  );
}

export default BonusScene;
