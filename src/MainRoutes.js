import React from 'react'
import { Link, Route, Switch } from "react-router-dom";
import Category from './pages/Category';
import Home from './pages/Home';
import Orders from './pages/Orders';
import Products from './pages/Products';

export default function MainRoutes() {
    return (
        <div style={{marginTop:70}}>
        {/* <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/category">Category</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav> */}
  
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/category" exact component={Category}/>
          <Route path="/products" exact component={Products}/>
          <Route path="/orders" exact component={Orders}/>
        </Switch>
      </div>
    )
}
