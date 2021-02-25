import React from 'react';
import Button from '../Button/Button';
import Burger from '../Burger/Burger';
import classess from './CheckoutSummary.module.css'

const CheckoutSummary = (props)=>{
    
    return (
        <div className={classess.CheckoutSummary}>
            <h1>
                We hope it tasts well
            </h1>
            <div>
                <Burger style={{width:'300px' , height : '300px' , margin : 'auto'}}
                 ingradients = {props.ingradients} />
            </div>
            <Button btnType="Danger" click={props.checkoutCancel} >
                CANCEL
            </Button>
            <Button btnType="Success" click={props.checkoutContinue}>
                SUCCESS
            </Button>
        </div>
    )
}

export default CheckoutSummary;