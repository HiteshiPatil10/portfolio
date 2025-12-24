import React, { useState, useEffect, useCallback } from 'react';

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorFollowerPosition, setCursorFollowerPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile or has touch screen
    const checkMobile = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth <= 768;
      setIsMobile(isTouchDevice || isSmallScreen);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const onMouseMove = useCallback((e: MouseEvent) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
    setTimeout(() => {
      setCursorFollowerPosition({ x: e.clientX, y: e.clientY });
    }, 100);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      window.addEventListener('mousemove', onMouseMove);
      return () => window.removeEventListener('mousemove', onMouseMove);
    }
  }, [onMouseMove, isMobile]);

  // Don't render custom cursor on mobile devices
  if (isMobile) {
    return null;
  }

  return (
    <>
      <div 
        className="cursor"
        style={{ 
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />
      <div 
        className="cursor-follower"
        style={{ 
          left: `${cursorFollowerPosition.x}px`,
          top: `${cursorFollowerPosition.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />
    </>
  );
};

export default CustomCursor;