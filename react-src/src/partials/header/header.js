/**
 * Header Component.
 *
 * @package Canyonlands
 */

import React , {Component}from 'react';
import Nav from './nav';
//import SearchForm from './searchform';
import config from '../../client-config';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
//  
/**
  * Header
  *
  * @param {Object} props Props
  */

  class Header extends Component {
    constructor(props) {
         super(props);
        this.state = {
        };
    }

   
    render() {
        let siteLogoUrl;
        let siteTitle;
        let  siteDescription;
        let  favicon;
        
        return (
        <div className='header wrapper'>
            <Nav />
            {/* <SearchForm></SearchForm> */}
            <div className="hero">
                <Helmet>
                    <title>
                        { siteTitle ? siteTitle : config.siteTitle }-
                        { siteDescription
                            ? siteDescription
                            : config.siteDescription }
                    </title>
                    <link rel="icon" type="image/png" href={ favicon } />
			    </Helmet>
			    <div className="logo-section">
				{ siteLogoUrl ? (
					<Link to="/">
						<img
							className="site-logo"
							width="50"
							height="50"
							src={ siteLogoUrl }
							alt="Site Logo URL"
						/>
					</Link>
				) : (
					''
				) }
                </div>

				<div className="site-info">
					{ /*Site title*/ }
					{ siteTitle ? (
						<h1 className="site-title">{ siteTitle }</h1>
					) : (
						<h1 className="site-title">{ config.siteTitle }</h1>
					) }

					{ /*Site description*/ }
					{ siteDescription ? (
						<p className="site-description">{ siteDescription }</p>
					) : (
						<p className="site-description">
							{ config.siteDescription }
						</p>
					) }
				</div>
            </div>
          </div>
        );
    }
 };
 
 export default Header;