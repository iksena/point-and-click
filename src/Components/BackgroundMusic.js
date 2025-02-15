import React, { useEffect } from 'react';

const BackgroundMusic = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const audio = document.getElementById('audio');
      audio.play().catch(err => {
        console.error(err);
        document.addEventListener('click', () => {
          document.getElementById("audio").play()
        }, { once: true } );
      });
    }
  }, []);
  return (
    <audio id="audio" loop autoPlay> 
      <source src="/innerbloom.mp3" type="audio/mpeg"/>
    </audio>
  );
};

export default BackgroundMusic;