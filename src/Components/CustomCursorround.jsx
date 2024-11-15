import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import RoundedCursor from '../assets/Icons/roundcursor.svg';
import ArrowIcon from '../assets/Icons/cursoricon.svg';

const CustomCursorRound = ({ isVisible }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    if (isVisible) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isVisible]);

  return (
    isVisible && (
      <div
        className="fixed pointer-events-none"
        style={{
          width: '80px',
          height: '80px',
          transform: 'translate(-50%, -50%)',
          left: `${position.x}px`,
          top: `${position.y}px`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <motion.div
          style={{ position: 'absolute', width: '100%', height: '100%' }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          <img src={RoundedCursor} alt="Rounded Cursor" className="w-full h-full" />
        </motion.div>
        <img src={ArrowIcon} alt="Cursor Icon" className="w-6 h-6" style={{
          position: 'absolute',
          top: '50%', // Center vertically
          left: '50%', // Center horizontally
          transform: 'translate(-50%, -50%)' // Adjust position to account for the icon size
        }} />
      </div>
    )
  );
};

export default CustomCursorRound;
