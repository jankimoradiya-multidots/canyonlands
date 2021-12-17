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
import NotFound from './templates/NotFound';
//import Layout from './components/layout';
import Page from './templates/pages/Page';
//import Category from './components/pages/category';
//import Post from './components/pages/post';
//import Single from './templates/pages/Single';

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
