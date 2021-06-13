import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  searchWrapper: {
    background: '#F2F1F8',
    height: '275px',
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
}));

export const SearchBar = () => {
  const classes = useStyles();
  return (
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
  );
};
