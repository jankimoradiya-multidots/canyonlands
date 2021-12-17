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
import Home from './templates/pages/home';
//import Archive from './templates/Archive';
//import Single from './templates/Single';
import NotFound from './templates/notfound';
//import Layout from './components/layout';
import Page from './templates/pages/page';
//import Category from './components/pages/category';
//import Post from './components/pages/post';

const routes = (
    <Router>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/:pageSlug" element={<Page />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
);

ReactDOM.render(routes, document.getElementById('root'));
