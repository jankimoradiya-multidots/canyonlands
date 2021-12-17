import React, { Component } from 'react';
//import { useEffect, useState, useRef } from 'react';
//import axios from 'axios';
import config from '../../client-config';
//import '../../images/default/default.jpg';
class Page extends Component {
    constructor(props) {
         super(props);
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        const slug = 'sample-page'
        console.log("this.props");
        console.log(this.props);
        fetch(`${ config.siteURL }wp-json/wp/v2/pages?_embed&slug=${ slug }`)
        .then(response => response.json())
        .then(data => {
           if ( 0 < data.length ) {
                this.setState( {data : data[0] } );
            console.log(data);
           } 
        });
    }

    

   
    render() {
        const {data } = this.state;
        return (
                <div> 
                    <section className={`page-content`}>
						{ data.title && (
							<h2 dangerouslySetInnerHTML={{ __html: data.title.rendered }}/>
                        )}
						{/* { { data._embedded[ 'wp:featuredmedia' ] ? (
							<img
								src={
									data._embedded[ 'wp:featuredmedia' ][ 0 ]
										.source_url
								}
								alt={ data.title.rendered }
							/>
						) : (
							<img
								src={ config.defaultPostImage }
								alt={ data.title.rendered }
							/>
						) } 
                        } */}
						{  data.content && (
							<div
								dangerouslySetInnerHTML={ {
									__html: data.content.rendered,
								} }
							/>
						) }
					</section>
					<aside className="aside"></aside>
                </div>
        );
    }
};

export default Page;