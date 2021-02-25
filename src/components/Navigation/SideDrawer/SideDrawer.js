import React from 'react'
import Aux from '../../auxil'
import Logo from '../../Logo/Logo'
import BackDrop from '../../UI/Backdrop/Backdrop'
import NavigationItems from '../NavigationItems/NavigationItems'
import classess from './SideDrawer.module.css'

const SideDrawer = (props)=>{
     const classList = [classess.SideDrawer,props.show ? classess.open : classess.close].join(' ')
     return (
         <Aux>
             <BackDrop show={props.show} modalClose={props.closed}/>
             <div className={classList}>
                 <div className={classess.Logo}>
                    <Logo />
                 </div>
                 <nav>
                    <NavigationItems />
                 </nav>
             </div>
         </Aux>
         
     )
}

export default SideDrawer;