import React from 'react';

import classess from './BackDrop.module.css';


const BackDrop = (props)=>{
    return (
        props.show ? <div onClick={props.modalClose} className={classess.BackDrop}></div> : null
    )
}

export default BackDrop;