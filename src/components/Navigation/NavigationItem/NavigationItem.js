import React from 'react';
import classess from './NavigationItem.module.css';
import {NavLink} from 'react-router-dom';


const NavigationItem = (props)=>{
    return (
        <li className={[classess.NavigationItem,props.active ? 'active' : null].join(' ')}><NavLink to={props.link} activeClassName={classess.active}>{props.children}</NavLink></li>
    )
}

export default NavigationItem;