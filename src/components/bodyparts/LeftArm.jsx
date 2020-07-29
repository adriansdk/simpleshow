import React from 'react';
import leftArm from '../../assets/svg/simplemech arm 2.svg';

function LeftArm() {
  return (
    <div className="LeftArm">
      <img src={leftArm} alt="Right-arm" style={{ position: 'absolute' }} />
    </div>
  );
}

export default LeftArm;
