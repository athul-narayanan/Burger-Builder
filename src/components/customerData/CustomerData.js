import React from 'react';
import Button from '../Button/Button';
import classess from './CustomerData.module.css';
import axios from './../axios-orders'
import Spinner from '../spinner/spinner';

class CustomerData extends React.Component{
    state ={
        name : '',
        email : '',
        address : {
            street : '',
            postalCode : ''
         },
        loading : false
    }

    orderHandler = (event)=>{
        event.preventDefault();
        this.setState({loading:true})
        const orders = {
            ingradients : this.props.ingradients,
            price : this.props.price,
            customer : {
                name : "Athul Narayanan",
                address : {
                    street : "Athul veedu",
                    zipCode : 673529,
                    country : 'India'
                },
                email : 'athulnarayanan62@gmail.com',
                deliveryMethod : 'fastest'
            }
        }
        axios.post('orders.json',orders).then(response=>{
            this.setState({loading:false})
            this.props.history.push('/');
        }).catch(
            error=>{
                this.props.history.push('/');
                console.log(error)
                this.setState({loading:false})
            }
        );
    }

    render(){
        let customerData = this.state.loading ? <Spinner/> : 
                (<form>
                     <input type="text" name="name" placeholder="Enter your Name" />
                     <input type="text" name="email" placeholder="Enter your Email Id" />
                     <input type="text" name="street" placeholder="Street" />
                     <input type="text" name="postalcode" placeholder="Enter your Postal Code" />
                     <Button btnType="Success" click={this.orderHandler}>ORDER</Button>
                </form>);
        return(
            <div className={classess.CustomerData}>
                {customerData}
            </div>
        )
        
    }
}


export default CustomerData;

