import React from 'react';
import {
    FaFacebookF,
    FaWordpressSimple,
    FaTwitter,
    FaLinkedin,
    FaGithub,
    FaInstagram,
} from 'react-icons/fa';

export default function footer() {
    return (
        <footer>
            <div className="footer-top-bar">
                <h2>Multidots</h2>
                <div className="column">
                    <strong>USA</strong>
                    <p>
                        801 Barton Springs Rd <br /> Austin, TX 78704 <br /> +1
                        (646) 586 5500
                    </p>
                </div>
                <div className="column">
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
            <div className="copyright">
                <div className="social-links">
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
                </div>
                @2021 Multidots. All right reserved.
            </div>
        </footer>
    );
}
