import React from 'react';
import classess from './SideBarToggler.module.css'

const SideBarToggler = (props)=>{
   return (
      <div onClick={props.clicked} className={classess.DrawerToggle}>
          <div></div>
          <div></div>
          <div></div>
      </div>
   )
}


export default SideBarToggler;