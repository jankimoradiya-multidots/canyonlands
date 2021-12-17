import React from 'react';
import Head from '../../partials/header/header';
import Foot from '../../partials/footer';

export default function home(props) {
    return (
        <div>
            <div className="home">
                <Head></Head>
                hello world
                {/* <div className="content-area">
      <h1>{pageTitle}</h1>
      <TheLoop></TheLoop>
      <Pager></Pager>
      </div> */}
                <Foot></Foot>
            </div>
        </div>
    );
}

// const Home = (props) => {

//   //let pageTitle = props.match.path === '/search/:term' ? 'Search Results' : '';

//   return (
//    // <Provider router={props} >

//    // </Provider>
//   )

// }
// export default Home
