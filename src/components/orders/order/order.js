import React from 'react';
import classess from './Order.module.css'

const Order = (props)=>{
    let ingradientsList = []
    for(let ingradient in props.ingradients){
        ingradientsList.push({name:ingradient,amount:props.ingradients[ingradient]})
    }
    let ingradientsListOutput = ( 
        ingradientsList.map(ingradient=>{
           return <span className={classess.ingradientItem}>{ingradient.name} ({ingradient.amount})</span>
        }) 
    )
    return(
        <div className={classess.Order}>
            <p>Ingradients: {ingradientsListOutput}</p>
            <p>Price : <strong>USD {props.price}</strong></p>
        </div>
    )
}

export default Order;