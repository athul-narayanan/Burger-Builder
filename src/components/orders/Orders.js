import React from 'react';
import axios from './../axios-orders'
import Order from './order/order'
class Orders extends React.Component{
  state = {
    orders : [],
    loading : false
  }

  componentDidMount(){
    this.setState({loading:true})
    let orderList = [];
    axios.get('/orders.json').then(response=>{
       for(let key in response.data){
            let order = {...response.data[key],id:key}
            orderList.push(order);
       }
       this.setState({orders:orderList})
    }).catch(err=>{
      console.log(err)
    })
  }
  render(){ 
    return(
      <div>
         {this.state.orders.map(order=>{
           return <Order key={order.id} 
                    ingradients={order.ingradients}
                    price={order.price} />
         })}
      </div>
    )
  }
}
export default Orders;