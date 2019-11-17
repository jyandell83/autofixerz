import React from 'react';

const Footer = () =>  {
    return(
        <div className="footer top-margin-medium">
            <ul className="footer__nav">
                <li>About Us</li>
                <li>Contact</li>
                <li>FAQs</li>
                <li>Terms</li>
                <li><i className="fab fa-twitter"></i> <i className="fab fa-facebook"></i> <i className="fab fa-youtube"></i></li>
            </ul>
            <div className="copyright">
                &copy; Autofixerz LLC
            </div>
        </div>
    )


}

export default Footer;