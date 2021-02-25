import React from 'react';
import Aux from './auxil';
import classess from './layout.module.css'
import SideDrawer from './Navigation/SideDrawer/SideDrawer';
import Toolbar from './Navigation/Toolbar';

class Layout extends React.Component{
    state = {
        showDrawer : false
    }

    closeDrawerHandler = ()=>{
        this.setState({showDrawer:false})
    }

    showOrHideSidebar = ()=>{
        this.setState({showDrawer:true})
    }

    render(){
        return (
            <Aux>
                <Toolbar clicked={this.showOrHideSidebar}/>
                <SideDrawer show={this.state.showDrawer} closed={this.closeDrawerHandler} />
                <main className={classess.content}>{this.props.children}</main>
            </Aux>
        )
    }
    
}

export default Layout;