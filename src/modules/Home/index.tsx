import { makeStyles, Theme } from '@material-ui/core';
import axios from 'axios';
import React from 'react';
import { Card } from 'src/components/Card';
import Navbar from 'src/components/Navbar';
function fetchData(
  start: number = 0,
  searchString: string = '',
  resolve: Function
) {
  return axios
    .get(
      `https://jsonplaceholder.typicode.com/photos?_start=${start}&_limit=10&q=${searchString}`
    )
    .then((res) => resolve(res.data))
    .catch((err) => console.log(err));
}
//https://api.themoviedb.org/3/movie/popular?api_key=3c49c3cdfcc72dc26043342f2def425a
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginLeft: '2rem',
    marginRight: '2rem',
  },
  searchWrapper: {
    background: '#F2F1F8',
    height: '275px',
    borderRadius: '16px',
    margin: '20px 8% 0 8%',
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
      marginBottom: '5px',
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
  contentWrapper: {
    margin: '60px 8% 0 8%',
  },
  movieNav: {
    display: 'flex',
    marginBottom: '50px',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  movieNavItem: {
    display: 'flex',
    textAlign: 'center',
    opacity: '54%',
    alignItems: 'center',
    margin: '0 5px 0',
    height: '30px',
    padding: '6px',
    '&:hover': {
      textDecoration: 'underline',
      textDecorationColor: '#6855D68A',
    },
  },
  movieNavItemSelected: {
    textAlign: 'center',
    fontWeight: 500,
    display: 'flex',
    alignItems: 'center',
    borderRadius: '8px',
    margin: '0 5px 0',
    background: '#F6F6F6',
    height: '30px',
    padding: '6px 10px',
    '&:hover': {
      textDecoration: 'underline',
      textDecorationColor: '#6855D68A',
    },
  },
}));
const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar />
      <div className={classes.searchWrapper}>
        <div className={classes.searchTitle}>
          Find the perfect movie for&nbsp;<b>evening</b>
        </div>
        <div className={classes.searchInput}>
          <div className={classes.searchInputText}>
            <input type="text" className={classes.searchInputElement}></input>
          </div>
          <div className={classes.searchInputButton}>
            <input
              type="button"
              value="Search"
              className={classes.searchInputElement}
              style={{
                background: '#6855D68A',
                color: 'white',
              }}
            ></input>
          </div>
        </div>
      </div>
      <div className={classes.contentWrapper}>
        <div
          style={{
            fontSize: '30px',
            fontWeight: 400,
            fontFamily: 'inter',
            marginBottom: '30px',
          }}
        >
          Browse movies by category
        </div>
        <div className={classes.movieNav}>
          <div className={classes.movieNavItemSelected}>New Release</div>
          <div className={classes.movieNavItem}>Upcoming</div>
          <div className={classes.movieNavItem}>Action</div>
          <div className={classes.movieNavItem}>Comedy</div>
          <div className={classes.movieNavItem}>Crime</div>
          <div className={classes.movieNavItem}>Upcoming</div>
          <div className={classes.movieNavItem}>Action</div>
          <div className={classes.movieNavItem}>Comedy</div>
          <div className={classes.movieNavItem}>Crime</div>
          <div className={classes.movieNavItem}>Crime</div>
        </div>
        <div
          style={{
            display: 'flex',
            marginBottom: '50px',
            flexWrap: 'wrap',
          }}
        >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};
export default Home;
