import React from 'react';
import classes from './Banner.module.css';

function Banner() {
  return (
    <div className={classes.banner}>
      <div className={classes.banner__info}>
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you.
        </h5>
      </div>
    </div>
  );
}

export default Banner;
