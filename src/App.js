import Layout from './components/layout';
import React from 'react'
import BurgerBuilder from './containers/BurgerBuilder';
import Checkout from './components/checkout/checkout';
import {Route} from 'react-router-dom'
import Orders from './components/orders/Orders';

function App() {
  return (
    <div className="App">
      <Layout>
        <Route path="/" exact component={BurgerBuilder}/>
        <Route path="/checkout" component={Checkout}/>
        <Route path="/orders" component={Orders} />
      </Layout>
    </div>
  );
}

export default App;
