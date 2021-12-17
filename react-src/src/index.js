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
import NotFound from './templates/NotFound';
import Page from './templates/pages/Page';

const routes = (
    <Router>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/sample-page" element={<Page />}  />
            <Route path="/page-1" element={<Page />}  />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
);

ReactDOM.render(routes, document.getElementById('root'));
