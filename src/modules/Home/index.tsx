import { makeStyles, Theme } from '@material-ui/core';
import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { Card } from 'src/components/Card';
import Navbar from 'src/components/Navbar';
import { SearchBar } from 'src/components/SearchBar';
function fetchData(
  url: string,
  queryParams?: { [x: string]: number | string }
) {
  return axios.get(
    `https://api.themoviedb.org/3${url}?api_key=3c49c3cdfcc72dc26043342f2def425a
      `
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginLeft: '2rem',
    marginRight: '2rem',
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
  useEffect(() => {
    fetchData('/movie/now_playing', { page: 1 }).then((resp) =>
      console.log(resp.data)
    );
  }, []);
  return (
    <div className={classes.root}>
      <Navbar />
      <div className={classes.contentWrapper}>
        <SearchBar />
        <div
          style={{
            fontSize: '30px',
            fontWeight: 400,
            fontFamily: 'inter',
            marginTop: '100px',
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
            justifyContent: 'space-between',
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
