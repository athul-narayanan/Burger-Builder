import React , {Component} from 'react';
import classess from './burgerIngradient.module.css';
import PropTypes from 'prop-types'


class BurgerIngradient extends Component{
   
    render(){
        console.log(this.props);
        let ingradient = null;
        switch(this.props.type){

            case( 'bread-bottom' ) : 
               ingradient = <div className={classess.BreadBottom}></div>
               break;
            
            case('bread-top') : 
                ingradient = (
                    <div className={classess.BreadTop}>
                        <div className={classess.Seeds1}></div>
                        <div className={classess.Seeds2}></div>
                    </div>
                )
                break;
            case('salad') :
                ingradient = <div className={classess.Salad}> </div>
                break;
            case('cheese') :
                ingradient = <div className={classess.Cheese}> </div>
                break;
            case('bacon') :
                ingradient = <div className={classess.Bacon}> </div>
                break;
            
            case('meat') : 
                ingradient = <div className={classess.Meat}></div>
                break;
            
            
            
        }
        return ingradient;
    }
}

BurgerIngradient.propTypes = {
    type : PropTypes.string.isRequired
}


export default BurgerIngradient;