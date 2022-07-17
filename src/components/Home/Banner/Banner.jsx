import React, { useState } from 'react';
import Search from './Search/Search';
import classes from './Banner.module.css';
import { useNavigate } from 'react-router-dom';
import { Button } from '@material-ui/core';

function Banner() {
  const history = useNavigate();
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className={classes.banner}>
      <div className={classes.banner__search}>
        {showSearch && <Search />}

        <Button
          onClick={() => setShowSearch(!showSearch)}
          className={classes.banner__searchButton}
          variant="outlined"
        >
          {showSearch ? 'Hide' : 'Search Dates'}
        </Button>
      </div>
      <div className={classes.banner__info}>
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you.
        </h5>
        <Button onClick={() => history('search')} variant="outlined">
          Explore Nearby
        </Button>
      </div>
    </div>
  );
}

export default Banner;
