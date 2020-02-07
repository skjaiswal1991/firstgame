import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './component/home';
// import Home from './component/home';
// import Home from './component/home';


import {BrowserRouter as Router,Route} from 'react-router-dom';
import Movetext from './component/movetext';
import Image from './component/image';
import Testcase from './component/testcase';

import Frontend from './component/layout/frontend';

const AppRoute = ({component:Component,layout:Layout, ...rest})=>(
  <Route {...rest} render={(props)=>(
    <Layout><Component {...props}></Component></Layout>
  )}>
  </Route>
);

function App() {
  return (

    

            <Router>
                <AppRoute path='/' exact layout={Frontend} component={Home} />
                <AppRoute path='/snakes' layout={Frontend} component={Movetext} />
                <AppRoute path='/image' layout={Frontend} component={Image} />
                <AppRoute path='/testcase' layout={Frontend} component={Testcase} />                
            </Router>
         );
}

export default App;
