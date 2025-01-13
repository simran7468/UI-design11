import React, { useState, useEffect } from 'react';
import Header from '../HeroPage/Header';

const ScrollHeader = () => {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Show the header after scrolling 200px
      setShowHeader(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {showHeader && (
        <div className="z-20 fixed w-full m">
          <Header />
        </div>
      )}
    </>
  );
};

export default ScrollHeader;
