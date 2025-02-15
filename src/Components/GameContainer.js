import React, { useState } from 'react';
import { Text, Code } from '@mantine/core';
import { useMouse } from '@mantine/hooks';
import RoomLayout from './RoomLayout';
import ObjectDetailsPopup from './ObjectDetailsPopup'; 
import interactiveObjects from '../data/interactiveObjects.json';
import BackgroundMusic from './BackgroundMusic';

function GameContainer() {
  const { ref, x, y } = useMouse();
  const [selectedObject, setSelectedObject] = useState(null);

  const handleObjectClick = (object) => {
    setSelectedObject(object);
  };

  const handleClosePopup = () => {
    setSelectedObject(null);
  };

  return (
    <div>
      <BackgroundMusic />
      <RoomLayout
        ref={ref}
        imageUrl="/images/layout.png"
        interactiveObjects={interactiveObjects}
        onObjectClick={handleObjectClick}
      />
      {selectedObject && (
        <ObjectDetailsPopup 
        opened={Boolean(selectedObject)}
        object={selectedObject} 
        onClose={handleClosePopup} 
        />
      )}
      <Text ta="left" my={3}>Koordinat <Code>{`{ x: ${x}, y: ${y} }`}</Code></Text>
    </div>
  );
}

export default GameContainer;