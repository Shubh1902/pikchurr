import { makeStyles, Theme } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  navHeader: {
    fontSize: '36px',
    fontFamily: 'Baloo Bhai',
    fontStyle: 'Regular',
    fontWeight: 400,
    color: '#6855D6',
  },
  navItems: {
    margin: '0 0 0 auto',
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      margin: '0',
    },
  },
  navItem: {
    margin: '0 1rem',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      margin: '.25rem 0',
    },
    fontSize: '16px',
    fontFamily: 'Roboto',
    fontStyle: 'Regular',
    fontWeight: 400,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.navHeader}>pikchurr</div>
      <div className={classes.navItems}>
        <div className={classes.navItem}>Movies</div>
        <div className={classes.navItem}>TV Shows</div>
        <div className={classes.navItem}>Kids</div>
      </div>
    </div>
  );
};
export default Navbar;
