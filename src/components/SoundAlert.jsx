import { useEffect } from 'react'

const SoundAlert = ({ play }) => {
  useEffect(() => {
    if (play) {
      const audio = new Audio('/alert-bell.mp3'); 
      audio.play();
    }
  }, [play]);

  return null; 
};

export default SoundAlert;