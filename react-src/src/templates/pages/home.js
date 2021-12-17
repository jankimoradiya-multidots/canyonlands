import React from 'react';
import Head from '../../partials/header/header';
import Foot from '../../partials/footer';
import AllPosts from './../../components/AllPosts';

export default function Home(props) {
    return (
        <div>
            <div className="home">
                <Head></Head>
                hello world new
                <AllPosts />
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
