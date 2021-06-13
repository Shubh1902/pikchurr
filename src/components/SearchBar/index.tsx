import { makeStyles, Theme } from '@material-ui/core';
import React, { ChangeEvent, useState } from 'react';
import { useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';
const useStyles = makeStyles((theme: Theme) => ({
  searchWrapper: {
    background: '#F2F1F8',
    height: '325px',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  searchTitle: {
    height: '30px',
    fontSize: '30px',
    fontWeight: 400,
    fontFamily: 'inter',
    marginBottom: '50px',
    textAlign: 'center',
  },
  searchInput: {
    display: 'flex',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  searchInputText: {
    flexGrow: 6,
    [theme.breakpoints.down('xs')]: {
      flexGrow: 1,
      width: '100%',
      marginRight: '0',
      marginBottom: '10px',
    },
    marginRight: '20px',
  },
  searchInputButton: {
    flexGrow: 1,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  searchInputElement: {
    width: '100%',
    border: 'none',
    borderRadius: '8px',
    height: '40px',
  },
}));

export const SearchBar = (props: { value: string; callback: Function }) => {
  const classes = useStyles();
  const [searchString, setSearchString] = useState(props.value);

  useEffect(() => {
    setSearchString(props.value);
  }, [props.value]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchString(event.target.value);
  };
  const handleSubmit = () => {
    props.callback(searchString);
  };
  return (
    <div className={classes.searchWrapper}>
      <div className={classes.searchTitle}>
        Find the perfect movie for&nbsp;<b>evening</b>
      </div>
      <div className={classes.searchInput}>
        <div className={classes.searchInputText}>
          <input
            type="search"
            className={classes.searchInputElement}
            value={searchString}
            onChange={handleChange}
            placeholder="Search..."
          ></input>
        </div>
        <div className={classes.searchInputButton}>
          <input
            type="button"
            value="Search"
            className={classes.searchInputElement}
            style={{
              background: '#6855D68A',
              color: 'white',
              cursor: 'pointer',
            }}
            onClick={handleSubmit}
          ></input>
        </div>
      </div>
    </div>
  );
};
