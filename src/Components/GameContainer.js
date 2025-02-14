import React, { useState } from 'react';
import { Text, Code } from '@mantine/core';
import { useMouse } from '@mantine/hooks';
import RoomLayout from './RoomLayout';
import ObjectDetailsPopup from './ObjectDetailsPopup'; // Create this component

const interactiveObjects = [
  {
    id: 'cow',
    name: 'Cowy',
    area: { type: 'polygon', coords: [[190, 325], [239, 326], [200, 390], [241, 389]] },
    details: { text: 'Sapi is a cow in Indonesian.' }
  },
  {
    id: 'worm',
    name: 'Ncacing',
    area: { type: 'polygon', coords: [[247, 373], [284, 358], [254, 404], [300, 391]] },
    details: { text: 'Ncacingans', type: 'images', images: ['/images/ncacing/1.jpeg', '/images/ncacing/2.heic', '/images/ncacing/3.heic'] }
  }
];

function GameContainer() {
  const { ref, x, y } = useMouse();
  const [selectedObjectDetails, setSelectedObjectDetails] = useState(null);

  const handleObjectClick = (object) => {
    setSelectedObjectDetails(object.details);
  };

  const handleClosePopup = () => {
    setSelectedObjectDetails(null);
  };

  return (
    <div>
      <Text ta="center">
        Mouse coordinates <Code>{`{ x: ${x}, y: ${y} }`}</Code>
      </Text>
      <RoomLayout
        ref={ref}
        imageUrl="/images/layout.png"
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