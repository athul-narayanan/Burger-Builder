import React from 'react';
import NavigationItem from '../NavigationItem/NavigationItem';
import classess from './NavigationItems.module.css'


const NavigationItems = (props)=>{
    return(
        <ul className={classess.NavigationItems}>
            <NavigationItem link="/">Burger Builder</NavigationItem>
            <NavigationItem link="/orders">orders</NavigationItem>
        </ul>
    )
}

export default NavigationItems;