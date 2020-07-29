import React from 'react';
import torso from '../../assets/svg/simplemech-torso.svg';

function Torso() {
  return (
    <div className="Torso">
      <img src={torso} alt="Right-arm" style={{ position: 'absolute' }} />
    </div>
  );
}

export default Torso;
