import React, { useState } from 'react';
import classes from './Search.module.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { Button } from '@material-ui/core';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

function Search() {
  const history = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    <div className={classes.search}>
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      {/*DATE PICKER COMPONENT*/}
      <h2>
        Number of guests <AccountCircleIcon />
      </h2>
      <input min={0} defaultValue={2} type="number" />
      <Button onClick={() => history('search')}>Search Airbnb</Button>
    </div>
  );
}

export default Search;
