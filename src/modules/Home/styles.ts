import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
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
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
    },
  },
  movieNavItem: {
    
    display: 'flex',
    textAlign: 'center',
    opacity: '54%',
    alignItems: 'center',
    margin: '0 5px 0',
    height: '30px',
    padding: '6px 10px',
    '&:hover': {
      textDecoration: 'underline',
      textDecorationColor: '#6855D68A',
    },
    cursor: 'pointer',
  },
  movieNavItemSelected: {
    fontWeight: 500,
    borderRadius: '8px',
    background: '#F6F6F6',
    opacity: '100% !important',
  },
  cardsWrapper: {
    display: 'flex',
    marginBottom: '50px',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  browseHeader: {
    fontSize: '30px',
    fontWeight: 400,
    fontFamily: 'inter',
    marginTop: '100px',
    marginBottom: '30px',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
    },
  },
}));
