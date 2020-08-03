import React, { useState } from 'react';
import InstructionBox from '../assets/png/instruction_box.png';

function Instruction(props) {
  const Instructions = {
    position: 'absolute',
    left: '944px',
    top: '94px',
    height: 'auto',
    zIndex: '2',
  };

  return (
    <div>
      <img src={InstructionBox} alt={'Instructions'} style={Instructions}></img>
    </div>
  );
}

export default Instruction;
