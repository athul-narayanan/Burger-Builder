import React from 'react';
import LogoImage from './burger-logo.png';
import classess from './Logo.module.css';


const Logo = (props)=>{
    return (
        <div className={classess.Logo}>
            <img src={LogoImage} alt="logo" />
        </div>
    )
}

export default Logo;