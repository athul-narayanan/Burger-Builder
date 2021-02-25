import {combineReducers} from 'redux';
import ingradientReducer from './IngradientReducer';
import totalAmountReducer from './totalAmountReducer';

const reducer = combineReducers({ingradients:ingradientReducer,total:totalAmountReducer});

export default reducer;
