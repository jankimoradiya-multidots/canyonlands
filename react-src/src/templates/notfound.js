import React from 'react';
//import Head from '../partials/header/nav';
import Foot from '../partials/footer';
import Nav from '../partials/header/nav';

class NotFound extends React.Component {
  render() {
    return (
      <div className="notfound">
        <Nav></Nav>
        <div className="content-area">
            <div id="wrapper">
                <img class="not-found-img" src="https://i.imgur.com/qIufhof.png" alt='404 page' />
                <div id="info">
                    <h2>This page could not be found</h2>
                </div>
            </div>
        </div>
        <Foot></Foot>
      </div>
    )
  }
}
export default NotFound