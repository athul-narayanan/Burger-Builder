import React from  'react';
import Aux from '../../auxil';
import BackDrop from '../Backdrop/Backdrop';

import Classess from './Modal.module.css';

class Modal extends React.Component{

    shouldComponentUpdate(nextProps,nextState){
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children
    }

    render(){
        return (
            <Aux>
               <BackDrop show={this.props.show} modalClose={this.props.modalClose} />
               <div className={Classess.Modal} style={{
                transform : this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity : this.props.show ? '1' : 0
                }}>
                    {this.props.children}
                </div>
            </Aux>
            
        )
    }
}
export default Modal;