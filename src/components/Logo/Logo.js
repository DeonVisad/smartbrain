import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './brain2.png';

const Logo = () => {
    return (
            <Tilt className="Tilt" style={{width: '150px',}}>
                <div className="ma2 mt0" style={{ height: '100px',}}>
                   <img style={{paddingTop:'1px'}} alt='logo' src={brain}/>
                </div>
            </Tilt>
    );
  };

  export default Logo;