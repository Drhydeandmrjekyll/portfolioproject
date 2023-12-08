import { useEffect, useRef } from 'react'
import LogoS from '../../../assets/images/logo-s.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()
  const timer = setTimeout(() => 
    useEffect(() => {
      const timer = setTimeout(() => {
        setShowLogo(true);
      }, 3000); 
  
      return () => {
        clearTimeout(timer);
      };
    }, [])); 
   return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript,  Developer"
      />
    </div>
  )
}
export default Logo