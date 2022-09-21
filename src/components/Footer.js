import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-banner'>
        <div className='footer-logo'>
          <img src='/image/footer-logo.svg' alt='footer logo' />
        </div>
        <div className='right-flex'>
          <div id='phone-container' className='flex-container '>
            <a href='tel:+2348123456789'>
              <img src='/image/phone-call.svg' alt='phone' />
            </a>
            <a href='tel:+2348123456789' className='phone'>
              +234 812 345 6789
            </a>
          </div>

          <div id='email-container' className='flex-container icon'>
            <a href='mailto:hello@pantiket.ng'>
              <img src='/image/icon/Vector.png' alt='email' />
            </a>
            <a href='mailto:hello@pantiket.ng' className='email'>
              hello@pantiket.ng
            </a>
          </div>

          <div id='icon-container' className='flex-container'>
            <img src='/image/linkedin.svg' alt='linkedin' />
            <img src='/image/whatsapp.svg' alt='whatsapp' />
            <img src='/image/facebook.svg' alt='facebook' />
            <img src='/image/instagram.svg' alt='instagram' />
            <img src='/image/twitter.svg' alt='twitter' />
          </div>
        </div>
      </div>
      <div className='footer-caption'>
        <div>
          <small>2019 &copy; All rights reserved by BoyePanthera.com</small>
        </div>
        <div>
          <small>Designed with ❤️ by BlaqMac Design</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
