import * as actionTypes from './actionTypes'

const initialState = {
    bacon: 0,
    cheese: 0,
    meat: 0 ,
    salad: 0 ,
}

const ingradientReducer = (state=initialState,action)=>{
     switch(action.type){
         case actionTypes.ADD_INGRADIENTS :
            return {
                ...state,[action.payload] : state[action.payload] + 1
            }
        case actionTypes.REMOVE_INGRADIENTS :
            return {
                ...state,[action.payload] : state[action.payload] - 1
            }
        default :
           return state
     }
}


export default ingradientReducer;