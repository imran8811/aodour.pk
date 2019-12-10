import React, {Fragment} from 'react';

function Footer(props){
    return(
        <Fragmemt>
        <footer className="page-footer row">
            <div className="col-md-4 newletter">
              <h5>Signup TO Our Newslatters</h5>
              <p><input type="text" className="form-control" placeholder="Email address"/><button className="new-btn"><i className="fa fa-angle-right"></i></button></p>
            </div>
            <div className="col-md-2">
              <h5 className="text-uppercase footer-mobile-dropdown">Customer Care</h5>
              <ul className="list-unstyled">
                <li><a href="about.html">About Us</a></li>
                <li><a href="#!">Our Team</a></li>
                <li><a href="#!">FAQs</a></li>
                <li><a href="#!">Site Map</a></li>
                <li><a href="#!">Store Locator</a></li>
              </ul>
            </div>
            <div className="col-md-2">
              <h5 className="text-uppercase footer-mobile-dropdown">Information</h5>
              <ul className="list-unstyled">
                <li><a href="delivery.html">Delivery Information</a></li>
                <li><a href="policy.html">Privacy Policy</a></li>
                <li><a href="terms.html">Terms &amp; Conditions</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5 className="text-uppercase footer-mobile-dropdown">Contact Us</h5>
              <ul className="list-unstyled">
                <li>
                    <address>
                        <i className="fa fa-map-marker"></i>
                        Office # 387 L Block, DHA Phase 5, DHA Lahore. Pakistan
                    </address>
                </li>
                <li><a href="tel:04237178775">
                    <i className="fa fa-phone"></i>+92 (42) 37178775</a>
                </li>
                <li><a href="mailto:info@aodour.com">
                    <i className="fa fa-envelope"></i>info@aodour.com</a>
                </li>
                <li><a href="mailto:partnership@aodour.com">
                    <i className="fa fa-envelope"></i>Partnership@aodour.com</a>
                </li>
              </ul>
            </div>
        </footer>
        <div className="footer-copyright text-center footer-copyright-product row">
            <div className="social-media col-md-4">
              <ul className="unstyled">
                    <li><a href="#!"><i className="fa fa-facebook-f"></i></a></li>
                    <li><a href="https://www.instagram.com/aodourcosmetics/"><i className="fa fa-instagram"></i></a></li>
                    <li><a href="https://www.facebook.com/aodourpakistan/"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="https://www.youtube.com/channel/UCr81MePqWu-OfInHM7xjZmQ"><i className="fa fa-youtube"></i></a></li>
                    <li><a href="https://wa.me/00923134846158"><i className="fa fa-whatsapp"></i></a></li>
              </ul>
            </div>
            <div className="copyright col-md-4">Copyright 2019 Aodour All rights reserved.</div>
            <div className="payment-methods col-md-4">
               <ul className="unstyled">
                    <li><i className="fa fa-cc-mastercard"></i></li>
                    <li><i className="fa fa-cc-visa"></i></li>
                    <li><i className="fa cod-style">COD</i></li>
                </ul>
           </div>
        </div>
        </Fragmemt>
    )
}
export default Footer;