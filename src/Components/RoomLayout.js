import React from 'react';

const ClickableDots = ({ interactiveObjects, onObjectClick }) => {
  return interactiveObjects.map(object => {
    let centerX = 0;
    let centerY = 0;
    if(object.area.type === 'rect') {
      const [x, y, width, height] = object.area.coords;
      centerX = x + width / 2;
      centerY = y + height / 2;
    } else if(object.area.type === 'polygon') {
      let sumX = 0, sumY = 0;
      const numPoints = object.area.coords.length;
    
      object.area.coords.forEach(([x, y]) => {
        sumX += x;
        sumY += y;
      });
    
      centerX = sumX / numPoints;
      centerY = sumY / numPoints;
    }

    return (
      <div
        key={object.id}
        className="dotLocation"
        style={{ position: 'absolute', left: centerX, top: centerY, cursor: 'pointer' }}
        onClick={() => onObjectClick(object)}
        title={object.name}
      ></div>
    );
  })
};

const RoomLayout = React.forwardRef(({ imageUrl, interactiveObjects, onObjectClick }, ref) => {
  const divRef = React.useRef(null);
  const [imgDimensions, setImgDimensions] = React.useState({ width: 0, height: 0 });

  React.useEffect(() => {
    if (ref?.current) {
      setImgDimensions({
        width: ref?.current.naturalWidth,
        height: ref?.current.naturalHeight,
      });
    }
  }, [ref]);

  return (
    <div 
      ref={divRef}
      style={{
        position: 'relative',
        width: imgDimensions.width,
        height: imgDimensions.height,
      }}>
      <img ref={ref} src={imageUrl} alt="Room Layout" useMap="#roomMap"/>
      <map name="roomMap">
        {interactiveObjects.map(object => (
          <area
            key={object.id}
            shape={object.area.type === 'rect' ? 'rect' : 'poly'}
            coords={object.area.coords.flat().join(',')}
            alt={object.name}
            onClick={() => onObjectClick(object)}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </map>
      <ClickableDots interactiveObjects={interactiveObjects} onObjectClick={onObjectClick} />
    </div>
  );
});

export default RoomLayout;