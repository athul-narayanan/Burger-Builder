import React from 'react';
import Logo from '../Logo/Logo';
import NavigationItems from './NavigationItems/NavigationItems';
import SideBarToggler from './SideDrawer/SideBarToggler/SideBarToggler';
import classess from './Toolbar.module.css'

const Toolbar = (props)=>{
   return(
       <header className={classess.Toolbar}>
           <SideBarToggler clicked={props.clicked} />
           <Logo/>
           <nav className={classess.DesktopOnly}>
              <NavigationItems/>
           </nav>
       </header>
   )
}


export default Toolbar;