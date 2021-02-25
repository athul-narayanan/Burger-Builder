import React from 'react';
import Aux from '../auxil';
import Button from '../Button/Button';
import { connect } from 'react-redux';


const OrderSummary = (props)=>{
    const ingradients = Object.keys(props.ingradients).map(igKey=>{
          return <li><span style={{textTransform:'uppercase'}}>{igKey} : </span> {props.ingradients[igKey]}</li>
      })
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A Delicious Burger with the following ingradients</p>
            <ul>
               {ingradients}
            </ul>
            <p>Countinue to checkout</p>
            <p><strong>Total Price : {props.totalPrice}</strong></p>
            <Button btnType="Danger" click={props.cancelPurchase} >CANCEL</Button>
            <Button btnType="Success" click={props.continuePurchase} >CONTINUE</Button>
        </Aux>
    )
}

const mapStateToProps = (state)=>{
    return {
        ingradients : state.ingradients,
        totalPrice : state.totalPrice
    }
}

export default connect(mapStateToProps,null)(OrderSummary);