import React from 'react';
import Head from '../../partials/header/header';
import Foot from '../../partials/footer';

export default function home() {
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
