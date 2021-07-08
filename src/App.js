import React,{useState} from 'react';
import { Route, Switch } from 'react-router-dom';


import Home from './Pages/Home/Home';
import Shop from './Pages/Shop/Shop';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import Product from './Pages/Product/Product';


const App = () => {
  const initialState = JSON.parse(localStorage.getItem("product"))?JSON.parse(localStorage.getItem("product")):[];
    const [ cartItems, updateCartItems ] = useState(initialState);
    console.log(initialState);
    const [ShowRightSidebar, setShowRightSidebar] = useState(false);
  return (
    <div>
      <Switch>
        <Route
          path='/home'
          render={(props) => (
            <Home {...props}
              cartItems={cartItems} 
              ShowRightSidebar={ShowRightSidebar} 
              updateCartItems={updateCartItems} 
              setShowRightSidebar={setShowRightSidebar}
            />
          )}
        />

        <Route
          path='/shop'
          render={(props) => (
            <Shop {...props}
              cartItems={cartItems} 
              ShowRightSidebar={ShowRightSidebar} 
              updateCartItems={updateCartItems} 
              setShowRightSidebar={setShowRightSidebar}
            />
          )}
        />
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={SignUp}/>
        <Route
          path='/product'
          render={(props) => (
            <Product {...props}
              cartItems={cartItems} 
              ShowRightSidebar={ShowRightSidebar} 
              updateCartItems={updateCartItems} 
              setShowRightSidebar={setShowRightSidebar}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;

