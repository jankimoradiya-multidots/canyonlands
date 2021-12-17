import React from 'react';
import {
    FaFacebookF,
    FaWordpressSimple,
    FaTwitter,
    FaLinkedin,
    FaGithub,
    FaInstagram,
} from 'react-icons/fa';
import styled from 'styled-components';
const Footer = styled.footer`
    text-align: center;
    padding: 50px 0px;
    background: #f7f7f7;
    color: black;
    .address {
        width: 70%;
        margin: 80px auto 50px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        color: black;
        .column {
            width: 50%;
            margin: 0 auto;
            border: solid 1px #eee;
            padding: 50px 50px;
            background: #eee;
            strong {
                font-size: 24px;
            }
        }
        .column.left {
        }
    }
    .social-links {
        ul {
            margin: 0;
            padding: 0;
            li {
                margin: 0;
                padding: 0;
                display: inline-block;
                margin: 30px 10px 20px;
                a {
                    color: black;
                    font-size: 20px;
                }
            }
        }
    }
`;

export default function footer() {
    return (
        <Footer>
            <div className="footer-top-bar">
                <h2>Multidots</h2>
                <div className="address">
                    <div className="left column">
                        <strong>USA</strong>
                        <p>
                            801 Barton Springs Rd <br /> Austin, TX 78704 <br />{' '}
                            +1 (646) 586 5500
                        </p>
                    </div>
                    <div className="right column">
                        <strong>India</strong>
                        <p>
                            C-202, Ganesh Meridian,
                            <br />
                            S.G. Highway, <br />
                            Ahmedabad. Gujarat-380060 <br />
                            +91 87801-77094
                        </p>
                    </div>
                </div>
            </div>
            <div className="social-links">
                <ul>
                    <li>
                        <a href="#">
                            <FaWordpressSimple />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FaGithub />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FaFacebookF />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FaTwitter />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FaLinkedin />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FaInstagram />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="copyright">
                @2021 Multidots. All right reserved.
            </div>
        </Footer>
    );
}
