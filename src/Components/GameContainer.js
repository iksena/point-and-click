import React, { useState, useEffect } from 'react';
import { Text, Code, TextInput, Modal } from '@mantine/core';
import { useMouse } from '@mantine/hooks';
import RoomLayout from './RoomLayout';
import ObjectDetailsPopup from './ObjectDetailsPopup'; 
import interactiveObjects from '../data/interactiveObjects.json';
import BackgroundMusic from './BackgroundMusic';

function Login({validateLogin}) {
  const [value, setValue] = useState('');

  useEffect(() => {
    if(value === '11/08/2002'){
      validateLogin?.(true);
    }
  }
  , [value, validateLogin]);


  return (
    <TextInput
      label="Input password"
      placeholder="Password"
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
    />
  );
}

function GameContainer() {
  const { ref, x, y } = useMouse();
  const [selectedObject, setSelectedObject] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  const handleObjectClick = (object) => {
    setSelectedObject(object);
  };

  const handleClosePopup = () => {
    setSelectedObject(null);
  };

  return (
    <div>
      {!isLogin && 
        <Modal
        opened={!isLogin}
        title="Login"
        fullScreen
        radius={0}
        transitionProps={{ transition: 'fade', duration: 200 }}
        closeOnEscape={false}
        closeOnClickOutside={false}
        withCloseButton={false}
        >
          <Login validateLogin={setIsLogin} />
        </Modal>
      }
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