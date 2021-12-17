import React from 'react'
import Head from '../../partials/header/header';
import Foot from '../../partials/footer';

const Home = (props) => {  
  
  //let pageTitle = props.match.path === '/search/:term' ? 'Search Results' : '';

  return (
   // <Provider router={props} >
    <div className="home">
      <Head></Head>
      {/* <div className="content-area">
      <h1>{pageTitle}</h1>
      <TheLoop></TheLoop>
      <Pager></Pager>
      </div> */}
      <Foot></Foot>
    </div>
   // </Provider>
  )    
 
}
export default Home