import React, { Component } from 'react';
import {connect} from 'react-redux';
import Aux from '../components/auxil'
import BuildControls from '../components/BuildControls/BuildControls';
import Burger from '../components/Burger/Burger';
import OrderSummary from '../components/OrderSummary/OrderSummary';
import  Spinner  from '../components/spinner/spinner';
import Modal from '../components/UI/Modal/Modal';
import axios from './../components/axios-orders';
import WithErrorHandler from './../components/withErrorHandler';
import {addIngradients,removeIngradients,addPrice,subPrice} from './../actions';


const INGRADIENT_PRICES = {
    salad : 1,
    bacon : 2,
    cheese : 3,
    meat : 4
}


export class BurgerBuilder extends Component{
    state = {
        purchasable : false,
        purchasing : false,
        loading : false,
        error : null
    }

    purchasingItem = ()=>{
        this.setState({purchasing : true})
    }

    updatePurchaseState(){
        const total = Object.keys(this.props.ingradients).reduce((sum,key)=>{
            return sum + this.props.ingradients[key]
        },0)

        this.setState({purchasable : total > 0})
    }

    cancelPurchase = ()=>{

    }

    continuePurchase = ()=>{
        let ingradients = [];
        for(const i in this.props.ingradients){
            ingradients.push(i + '=' + this.props.ingradients[i]);
        }
        ingradients.push(`price=${this.state.totalPrice}`)
        ingradients = ingradients.join('&');
        this.setState({purchasing:false})
        this.props.history.push({
            pathname :'/checkout',
            search : '?' + ingradients
        })
    }

    addIngradient = (type)=>{
        this.props.addIngradients(type);
        this.props.addPrice(INGRADIENT_PRICES[type]);
        this.updatePurchaseState();
    }

    removeIngradient = (type)=>{
        this.props.removeIngradients(type);
        this.props.subPrice(INGRADIENT_PRICES[type]);
        this.updatePurchaseState();
    }

    modalClose = ()=>{
        this.setState({purchasing : false})
    }

    render(){
        const disableList = {
            ...this.props.ingradients
        }
        let burger = !this.state.error ? <Spinner /> : null;
        if(this.props.ingradients){
            burger = (
                <Aux>
                    <Burger {...this.state}/>
                    <BuildControls 
                        addIngra={this.addIngradient} 
                        removeIngra={this.removeIngradient}
                        disableList={disableList}
                        currentprice={this.state.totalPrice}
                        purchasable={this.state.purchasable}
                        purchasing = {this.purchasingItem}/>
                </Aux>
            )
        }
        let OrderSumm = (<OrderSummary
                             cancelPurchase={this.cancelPurchase}  
                             continuePurchase={this.continuePurchase}
                        />);
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClose={this.modalClose}>
                    {OrderSumm}
                </Modal>
                {burger}
            </Aux>
            
        )
    }

    componentDidMount(){
        
    }

   
}

const mapStateToProps = (state)=>{
    return {
        ingradients : state.ingradients
    }
}


export 
    default WithErrorHandler(connect(mapStateToProps,
    {addIngradients,removeIngradients,addPrice,subPrice}
    )(BurgerBuilder),axios);