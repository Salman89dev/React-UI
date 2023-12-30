import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import "./Footer.css"
let Footer=()=>
{
    return(
        <div className="footerDiv">
            <div className="footerLeft">
                <ul>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Terms of Use</a></li>
                    <li><a href="">Privacy Policy</a></li>
                </ul>
                <p>@Dezzinex 2023. All Right Reserved</p>
            </div>
            <div className="footerRight">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faTwitter} />
            </div>
        </div>
    )
}

export default Footer;