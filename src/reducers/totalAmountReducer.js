import * as actionTypes from './actionTypes';

const initalState = {
    totalAmount : 0
}

const totalAmountReducer = (state=initalState,action)=>{
    switch(action.type){
        case actionTypes.ADD_AMOUNT : 
             return {
                 ...state,totalAmount : state.totalAmount + action.payload
             }
        case actionTypes.SUB_AMOUNT : 
             return {
                 ...state,totalAmount : state.totalAmount - action.payload
             }

        default :
             return state;
    }
}


export default totalAmountReducer;