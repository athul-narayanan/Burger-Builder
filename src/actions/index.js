import * as actionTypes from './../reducers/actionTypes'



export const addIngradients = (ingradient)=>{
    return {
        type : actionTypes.ADD_INGRADIENTS,
        payload : ingradient
    }
}

export const removeIngradients = (ingradient)=>{
    return {
        type : actionTypes.REMOVE_INGRADIENTS,
        payload : ingradient
    }
}

export const addPrice = (price)=>{
    return {
        type : actionTypes.ADD_AMOUNT,
        payload : price
    }
}

export const subPrice = (price)=>{
    return {
        type : actionTypes.SUB_AMOUNT,
        payload : price
    }
}