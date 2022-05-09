import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../Footer/Footer.css'
import img from '../../Image/appstore (1).jpg'
import img2 from '../../Image/Play-Store (1).png'
import Resturant from './../Resturant/Resturant';

const Footer = () => {
    return (
        <div>
            <div className='footerback'>
                <div className='footertop container'>
                    <h4>STACK F<span style={{ color: 'orange' }}>OO</span>D</h4>
                    <div>
                        <h6>Follows us on</h6>
                        <div className='icon'>
                            <FacebookIcon />
                            <InstagramIcon />
                            <TwitterIcon />
                        </div>

                    </div>
                    <div>
                        <small>24/7 Helpline</small>
                        <h6>+52762434723476</h6>
                    </div>
                </div>
            </div>
            <div className='footerclass'>
                <div className='fotterbottom container'>
                    <div>
                        <div className='letsup'>
                            <h6>Download app to enjoy more</h6>
                            <small>Download our app from google play store and app store</small>
                        </div>
                        <div className='dnldimg'>
                            <img style={{ width: '150px' }} src={img2} alt="" />
                            <img style={{ width: '150px' }} src={img} alt="" />
                        </div>
                        <div className='lets'>
                            <h6>Lets Connect!</h6>
                            <small>Stay upto date with Resturant and foods around you</small>
                        </div>
                    </div>
                    <div className='account' style={{ textAlign: 'left' }}>
                        <h5>MY ACCOUNT</h5>
                        <h6>Profile</h6>
                        <h6>Address</h6>
                        <h6>My Order</h6>
                        <h6>Wallet</h6>
                        <h6>Loyality points</h6>


                    </div>
                    <div style={{ textAlign: 'left' }}>
                        <h5>OTHERS</h5>
                        <h6>Terms and Conditions</h6>
                        <h6>Privacy Policy</h6>
                        <h6>Help and Support</h6>
                        <h6>About Us</h6>
                        <h6>Contact Us</h6>


                    </div>
                    <div style={{ textAlign: 'left' }}>
                        <h5>QUICK LINKS</h5>
                        <h6>Compaings</h6>
                        <h6>Resturants</h6>
                        <h6>language</h6>



                    </div>
                </div>
            </div>

            <div>
                <div className='fotterlastcolor'>
                    <div className='footerlast container'>
                        <h6>Copy right @2021 6amTech</h6>
                        <div className='footercon'>
                            <h6>Terms and conditions</h6>
                            <h6>Privacy Policy</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;