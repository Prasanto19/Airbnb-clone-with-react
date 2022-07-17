import React from 'react';
import classes from './Footer.module.css';

function Footer() {
  return (
    <div className={classes.footer}>
      <p>
        Copyright &copy;{new Date().getFullYear()}.{/* {Dyanamic year} */}{' '}
        Airbnb clone! No rights reserved - this is a demo!
      </p>
      <p>Privacy · Terms · Sitemap · Company Details</p>
    </div>
  );
}

export default Footer;
