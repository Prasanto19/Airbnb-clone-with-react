import React from 'react';
import classes from './Header.module.css';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className={classes.header}>
      <Link to="/">
        <img
          className={classes.header__icon}
          src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
          alt=""
        />
      </Link>

      <div className={classes.header__center}>
        <input type="text" />
        <SearchIcon />
      </div>

      <div className={classes.header__right}>
        <p>Become a host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <AccountCircleIcon />
      </div>
    </div>
  );
};

export default Header;
