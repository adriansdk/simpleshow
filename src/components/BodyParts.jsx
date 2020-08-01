import React from 'react';
import LeftArm from './bodyparts/LeftArm';
import RightArm from './bodyparts/RightArm';
import Torso from './bodyparts/Torso';

function BodyParts() {
  return (
    <div className="BodyParts">
      <LeftArm name="leftArm"></LeftArm>
      <RightArm name="rightArm"></RightArm>
      {/* <Torso></Torso> */}
    </div>
  );
}

export default BodyParts;
