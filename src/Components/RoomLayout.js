import React from 'react';
import { useHover } from '@mantine/hooks';

const ObjectArea = ({ object, onObjectClick }) => {
  const { hovered, ref } = useHover();
  let style = { border: hovered ? '2px solid red' : '2px solid transparent' };
  if (object.area.type === 'rect') {
    const [x, y, width, height] = object.area.coords;
    style = { 
      ...style, 
      position: 'absolute', 
      left: `${x}px`, 
      top: `${y}px`, 
      width: `${width}px`, 
      height: `${height}px`, 
      cursor: 'pointer' 
    };
  } else if (object.area.type === 'polygon') {
    const coords = object.area.coords;
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    coords.forEach(([x, y]) => {
      minX = Math.min(minX, x);
      minY = Math.min(minY, y);
      maxX = Math.max(maxX, x);
      maxY = Math.max(maxY, y);
    });
    style = { 
      ...style, 
      position: 'absolute', 
      left: `${minX}px`, 
      top: `${minY}px`, 
      width: `${maxX - minX}px`, 
      height: `${maxY - minY}px`, 
      cursor: 'pointer', 
      backgroundColor: 'rgba(255, 255, 255, 0.1)' 
    };
  }

  return (
    <div
      ref={ref}
      key={object.id}
      style={style}
      onClick={() => onObjectClick(object)}
      title={object.name} 
    ></div>
  );
}

const RoomLayout = ({ imageUrl, interactiveObjects, onObjectClick, ref }) => {
  return (
    <div>
      <img ref={ref} src={imageUrl} alt="Room Layout" useMap="#roomMap" />
      {interactiveObjects.map(object => <ObjectArea key={object.id} object={object} onObjectClick={onObjectClick} />)}
    </div>
  );
};

export default RoomLayout;