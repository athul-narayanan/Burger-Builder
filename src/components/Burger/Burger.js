import React from 'react';
import classes from './Burger.module.css'
import BurgerIngradient from './BurgetIngradient/BurgetIngradient';
import { connect } from 'react-redux';


const Burger = (props)=>{
    let ingradients = Object.keys(props.ingradients).map(igKey=>{
        return [...new Array(props.ingradients[igKey])].map((_,i)=>{
           return <BurgerIngradient type={igKey} key={igKey+i} />
        })
    }).reduce((arr,el)=>{
       return arr.concat(el)
    },[])
    if(!ingradients.length){
        ingradients = <p>Please Start Adding Ingradients</p>
    }
    console.log(ingradients)
    return (
        <div className={classes.Burger}>
          <BurgerIngradient type="bread-top"/>
             {ingradients}
          <BurgerIngradient type="bread-bottom"/>
        </div>
    )
    
}

const mapStateToProps = (state)=>{
    return {
        ingradients : state.ingradients
    }
}

export default connect(mapStateToProps,{})(Burger);
