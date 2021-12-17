/**
 * App Component.
 *
 * @package Canyonlands
 */

/**
 * Internal Dependencies.
 */
 import React from 'react';
 import ReactDOM from 'react-dom';
 import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
 
 import './index.css';
 import Home from './templates/pages/home';
//import Archive from './templates/Archive';
//import Single from './templates/Single';
import NotFound from './templates/notfound';
//import Layout from './components/layout';
//import Page from './components/pages/page';
//import Category from './components/pages/category';
//import Post from './components/pages/post';

const routes = (   
    <Router>
      <Switch>               
          <Route exact path="/" component={Home} />          
          {/* <Route path="/page/:slug" component={Single} />    
          <Route path="/post/:slug" component={Single} /> 
          <Route path="/category/:catid" component={Archive} /> 
          <Route path="/search/:term" component={Archive} />                               
          <Redirect exact from='/post/' to='/' /> 
          <Redirect exact from='/page/' to='/' />
          <Redirect exact from='/search/' to='/' />         */}
          <Route component={NotFound} /> 
      </Switch>
    </Router> 
)

ReactDOM.render(routes, document.getElementById('root'));