import React from 'react';
import classess from './Button.module.css'

const Button = (props)=>{
    return (
        <button className={[classess.Button,classess[props.btnType]].join(' ')} 
           onClick={props.click} >{props.children}</button>
    )
}


export default Button;