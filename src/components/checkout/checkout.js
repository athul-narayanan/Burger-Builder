import React from 'react'
import CheckoutSummary from '../checkout-summary/CheckoutSummary';
import CustomerData from '../customerData/CustomerData';
import { Route } from 'react-router-dom';

class Checkout extends React.Component{
     state = {
         ingradients : null,
         price : null
     }

     componentDidMount(){
         console.log();
         const ingradients = {};
         const query = new URLSearchParams(this.props.location.search);
         for(let param of query.entries()){
             if(param[0] === 'price'){
                 this.setState({price:param[1]})
             }else{
                ingradients[param[0]] = param[1]
             }   
         }
         this.setState({ingradients:ingradients})
     }

     checkoutCancel = ()=>{
         this.props.history.goBack();
     }

     checkoutContinue = ()=>{
        this.props.history.push('/checkout/contact-data');
     }
     render(){
         console.log(this.props.match.path + '/contact-data');
         const value  =  this.state.ingradients ? <CheckoutSummary ingradients={this.state.ingradients} checkoutCancel={this.checkoutCancel} checkoutContinue={this.checkoutContinue} /> : null;
         return (
           <React.Fragment>
              {value}
            <Route path={this.props.match.path + '/contact-data'} 
                render={(props)=>this.state.ingradients ? <CustomerData ingradients={this.state.ingradients} price={this.state.price} {...props}/> : null} />
           </React.Fragment>
         )
     }
}


export default Checkout;