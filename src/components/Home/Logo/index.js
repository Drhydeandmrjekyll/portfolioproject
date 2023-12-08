import React, { useEffect, useRef, useState } from 'react';
import LogoS from '../../../assets/images/logo-s.png';
import './index.scss';

const Logo = () => {
  const solidLogoRef = useRef();
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []); 

  return (
    <div className={`logo-container ${showLogo ? 'fade-in' : ''}`}>
      <img
        className={`solid-logo ${showLogo ? 'visible' : ''}`}
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript, Developer"
      />
    </div>
  );
};

export default Logo;