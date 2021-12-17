import React from 'react';
import Head from '../../partials/header/header';
import Foot from '../../partials/footer';
import Archive from '../Archive';


export default function Home(props) {
    return (
        <div>
            <div className="home">
                <Head></Head>
                <Archive />
                <Foot></Foot>
            </div>
        </div>
    );
}

