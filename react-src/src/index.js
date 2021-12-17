/**
 * Index file.
 *
 * @package Canyonlands
 */

/**
 * Internal Dependencies.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './index.css';
import Home from './templates/pages/Home';
//import Archive from './templates/Archive';
import NotFound from './templates/notfound';
//import Layout from './components/layout';
//import Page from './components/pages/page';
//import Category from './components/pages/category';
//import Post from './components/pages/post';
import Single from './templates/pages/Single';
const routes = (
    <Router>
        <Routes>
            <Route exact path="/" element={<Home />} />
            {/* <Route exact path="/:slug" element={<Single />} /> */}
            <Route path="*" element={NotFound} />
        </Routes>
    </Router>
);

ReactDOM.render(routes, document.getElementById('root'));
