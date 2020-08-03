import React, { useState, useEffect } from 'react';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Container from './exports.js'

import './App.css'
import StartScene from './components/scenes/StartScene.jsx';
import EndScene from './components/scenes/EndScene.jsx';
import { CustomDragLayer } from './components/bodyparts/CustomDragLayer.jsx';
import BonusScene from './components/scenes/BonusScene.jsx';

function App() {
  const [scale, setScale] = useState(getScale);
  useEffect(() => {
    window.addEventListener('resize', updateViewport);
  });

  function updateViewport() {
    setScale(getScale);
  }
  function getScale() {
    const baseScale = 1;
    let widthDifference = ((window.innerWidth - 1920) / 1920) * 100.0;
    let heightDifference = ((window.innerHeight - 1080) / 1080) * 100.0;
    let decimalWidthDifference = (widthDifference /= 100);
    let decimalHeightDifference = (heightDifference /= 100);
    if (Math.abs(decimalHeightDifference) > Math.abs(decimalWidthDifference)) {
      return baseScale + heightDifference;
    } else if (
      Math.abs(decimalHeightDifference) < Math.abs(decimalWidthDifference)
    ) {
      return baseScale + widthDifference;
    }
  }

  const [draggableBonus, setDraggableBonus] = useState(false);
  const [bonus, setBonus] = useState(false);
  const [scene, setScene] = useState('intro')
  function switchScene(sceneName) {
    setScene(sceneName)
  }


  return (
    <div className="App"
      style={{
        transform: `scale(${scale})`,
        position: 'absolute',
        transformOrigin: 'left top',
      }}>
      <DndProvider backend={HTML5Backend}>
        {scene === 'intro' ? <StartScene switchScene={switchScene} scale={scale}></StartScene> : <React.Fragment></React.Fragment>}
        {scene === 'end' ? <EndScene switchScene={switchScene} scale={scale} setBonus={setBonus}></EndScene> : <React.Fragment></React.Fragment>}
        {scene === 'bonus' ? <BonusScene switchScene={switchScene} setDraggableBonus={setDraggableBonus} scale={scale}></BonusScene> : <React.Fragment></React.Fragment>}
        <Container switchScene={switchScene} scale={scale} bonus={bonus} draggableBonus={draggableBonus}></Container>
        <CustomDragLayer scale={scale}
        ></CustomDragLayer>
      </DndProvider>

    </div>
  );
}

export default App;
