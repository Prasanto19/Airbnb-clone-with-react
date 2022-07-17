import React from 'react';
import Banner from './Banner/Banner';
import classes from './Home.module.css';

// ES7 snippets to do 'rfce'

function Home() {
  return (
    <div className={classes.home}>
      <Banner />
    </div>
  );
}

export default Home;
