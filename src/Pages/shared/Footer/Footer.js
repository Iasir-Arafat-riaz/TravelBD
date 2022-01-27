import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div className='footer'>
        <div className='row'>
            <div className="footerColumn col-md-5">
                {/* <img src={logo} alt="img" /> */}
               <div>
               <h2 className='footerCoName'>Travel BD</h2>
                <p>Dhaka,Bangladesh</p>
                <p><b>Hotline: +8801622118833</b>
                </p>
               </div>
            </div>
            <div className=" col-md-2">
                <p><b>The TravelBD</b></p>
              <p>About Us</p>
              <p>Corporate Office</p>
            </div>
            <div className="col-md-2">
                <p><b>Join Us</b></p>
                <p>Driver-Partner</p>
                <p>Career</p>
            </div>
            <div className="col-md-2">
                <p><b>Support</b></p>
                <p>Help Center</p>
                <p>Terms & Condition</p>
                <p>Privacy Policy</p>
            </div>

        </div>
        <hr />
        <p className='text-center'><small >&copy;2022 Travel BD. Dhaka,Bangladesh. All Right Reserved.</small></p>
     </div>
    );
};

export default Footer;