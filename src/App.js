import React, { useState, useEffect } from 'react';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Exports from './exports.js'

import './App.css'
import StartScene from './components/scenes/StartScene.jsx';
import EndScene from './components/scenes/EndScene.jsx';

function App() {

  const [scene, setScene] = useState('intro')
  let currentScene

  function switchScene(sceneName) {
    setScene(sceneName)
  }

  const [scale, setScale] = useState(getScale());

  useEffect(() => {
    window.addEventListener('resize', updateViewport);
  });

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

  function updateViewport() {
    setScale(getScale);
  }

  if (scene === 'intro') {
    currentScene = <StartScene switchScene={switchScene} scale={scale}></StartScene>

  } else if (scene === 'assembly') {
    currentScene = <Exports switchScene={switchScene} scale={scale}></Exports>
  }

  return (
    <div className="App"
      style={{
        transform: `scale(${scale})`,
        position: 'absolute',
        transformOrigin: 'left top',
      }}>
      <DndProvider backend={HTML5Backend}>
        {scene === 'intro' ? <StartScene switchScene={switchScene} scale={scale}></StartScene> : <div></div>}
        {scene === 'end' ? <EndScene switchScene={switchScene} scale={scale}></EndScene> : <div></div>}
        <Exports switchScene={switchScene} scale={scale}></Exports>
      </DndProvider>

    </div>
  );
}

export default App;
