import React, { useState } from 'react';
import { Text, Code, Group, Box } from '@mantine/core';
import { useMouse } from '@mantine/hooks';
import RoomLayout from './RoomLayout';
import ObjectDetailsPopup from './ObjectDetailsPopup'; // Create this component

function GameContainer() {
  const { ref, x, y } = useMouse();
  const [interactiveObjects, setInteractiveObjects] = useState([{
    id: 'desk-1',
    name: 'Desk',
    area: { type: 'rect', coords: [50, 60, 100, 80] }, // x, y, width, height
    details: 'A wooden desk with a few papers on it.'
  },
  {
    id: 'bookcase-1',
    name: 'Bookcase',
    area: { type: 'polygon', coords: [[450, 225], [625, 200], [470, 564], [632, 530]] }, // Array of [x, y] points
    details: 'A tall bookcase filled with old books.'
  }]);
  const [selectedObjectDetails, setSelectedObjectDetails] = useState(null);

  const handleObjectClick = (object) => {
    setSelectedObjectDetails(object.details); // Set details to show in popup
  };

  const handleClosePopup = () => {
    setSelectedObjectDetails(null); // Hide popup
  };

  return (
    <div>
      <Text ta="center">
        Mouse coordinates <Code>{`{ x: ${x}, y: ${y} }`}</Code>
      </Text>
      <RoomLayout
        ref={ref}
        imageUrl="/images/layout.jpg" // Path to your image in public folder
        interactiveObjects={interactiveObjects}
        onObjectClick={handleObjectClick}
      />
      {selectedObjectDetails && (
        <ObjectDetailsPopup details={selectedObjectDetails} onClose={handleClosePopup} objectName={selectedObjectDetails.name} />
      )}
    </div>
  );
}

export default GameContainer;