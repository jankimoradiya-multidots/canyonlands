import React from 'react';
import Head from '../../partials/header/header';
import Foot from '../../partials/footer';

export default function Single(props) {
    console.log(props.match.params);
    return (
        <div>
            <div className="home">
                <Head></Head>
                this is single page
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
