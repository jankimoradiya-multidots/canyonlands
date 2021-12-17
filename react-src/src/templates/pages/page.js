import React, { Component, Fragment } from 'react';
import config from '../../client-config';
import Head from '../../partials/header/header';
import Foot from '../../partials/footer';
class Page extends Component {
    constructor(props) {
         super(props);
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        const currentURL = window.location.href;
        fetch(`${ config.siteURL }wp-json/canyonlands/v2/postType?url=${currentURL}`)
        .then(response => response.json())
        .then(data => {
            console.log("data");
            console.log(data);
           if ( data ) {
                const postType = data.postType
            fetch(`${ config.siteURL }wp-json/wp/v2/${postType}s?_embed&slug=${ data.post_name }`)
            .then(response => response.json())
            .then(data => {
            if ( 0 < data.length ) {
                    this.setState( {data : data[0] } );
                console.log(data);
            } 
            });
           } 
        });

        
        console.log("this.props");
        console.log(this.props);
        
        
    }

    
    componentDidUpdate(){
        alert("gfgf");
    }
   
    render() {
        const {data } = this.state;
        return (
            <Fragment>
                    <Head></Head>
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
                    <Foot></Foot>
            </Fragment>
                    
        );
    }
};

export default Page;