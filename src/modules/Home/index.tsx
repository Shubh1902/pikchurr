import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Card } from 'src/components/Card';
import Navbar from 'src/components/Navbar';
import { SearchBar } from 'src/components/SearchBar';
import { DEFAULT_GENRES, ENDPOINTS } from 'src/modules/Home/constants';
import { useStyles } from 'src/modules/Home/styles';
import {
  MovieGenresInterface,
  MovieRespInteface as MovieRespInterface,
} from 'src/modules/Home/types';
import { __request } from 'src/request';

const Home = () => {
  const classes = useStyles();
  const [movies, setMovies] = useState<MovieRespInterface[]>([]);
  const [page, setPage] = useState(1);
  const [genres, setGenres] = useState<MovieGenresInterface[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<string | number>(
    DEFAULT_GENRES.now_playing
  );
  const [searchParam, setSearchParam] = useState('');
  const [hasMore, setHasMore] = useState(true);
  const toggleHasMore = (data: MovieRespInterface[]) => {
    if (data.length < 20) {
      setHasMore(false);
    } else setHasMore(true);
  };
  useEffect(() => {
    __request(ENDPOINTS.now_playing, { page }).then((resp) => {
      setPage((page) => page + 1);
      setMovies(resp.data.results);
      toggleHasMore(resp.data.results);
    });
    __request(ENDPOINTS.genres).then((resp) => setGenres(resp.data.genres));
  }, []);
  const loadMore = () => {
    if (searchParam) {
      __request(ENDPOINTS.search, { page, query: searchParam }).then((resp) => {
        setPage((page) => page + 1);
        setMovies((movies) => movies.concat(resp.data.results));
        toggleHasMore(resp.data.results);
      });
    } else {
      switch (selectedGenre) {
        case DEFAULT_GENRES.now_playing:
        case DEFAULT_GENRES.upcoming:
          __request(ENDPOINTS[selectedGenre], { page }).then((resp) => {
            setPage((page) => page + 1);
            setMovies((movies) => movies.concat(resp.data.results));
            toggleHasMore(resp.data.results);
          });
          break;
        default:
          __request(ENDPOINTS.popular, {
            page,
            with_genres: selectedGenre,
          }).then((resp) => {
            setPage((page) => page + 1);
            setMovies((movies) => movies.concat(resp.data.results));
            toggleHasMore(resp.data.results);
          });
      }
    }
  };

  const loadDataForGenre = (genre: string | number) => {
    switch (genre) {
      case DEFAULT_GENRES.now_playing:
      case DEFAULT_GENRES.upcoming:
        __request(ENDPOINTS[genre], { page: 1 }).then((resp) => {
          setPage(2);
          setMovies(resp.data.results);
          toggleHasMore(resp.data.results);
        });
        break;
      default:
        __request(ENDPOINTS.popular, {
          page: 1,
          with_genres: genre,
        }).then((resp) => {
          setPage(2);
          setMovies(resp.data.results);
          toggleHasMore(resp.data.results);
        });
    }
  };
  const handleGenreChange = (id: number | string) => {
    if (selectedGenre === id) return;
    setSelectedGenre(id);
    loadDataForGenre(id);
  };
  const searchMovies = (searchString: string) => {
    if (searchString === searchParam) return;
    setSearchParam(searchString);
    if (!searchString) {
      loadDataForGenre(selectedGenre);
    } else {
      __request(ENDPOINTS.search, { page: 1, query: searchString }).then(
        (resp) => {
          setPage(2);
          setMovies(resp.data.results);
          toggleHasMore(resp.data.results);
        }
      );
    }
  };
  return (
    <div className={classes.root}>
      <Navbar />
      <div className={classes.contentWrapper}>
        <SearchBar callback={searchMovies} value={searchParam} />
        {searchParam && (
          <div className={classes.browseHeader}>
            Showing results for <b>{searchParam}</b>
          </div>
        )}
        {!searchParam && (
          <>
            <div className={classes.browseHeader}>
              Browse movies by category
            </div>
            <div className={classes.movieNav}>
              <div
                className={clsx(classes.movieNavItem, {
                  [classes.movieNavItemSelected]:
                    selectedGenre === DEFAULT_GENRES.now_playing,
                })}
                onClick={() => {
                  handleGenreChange(DEFAULT_GENRES.now_playing); //using id as string to not override api ids which can be any number
                }}
              >
                New Release
              </div>
              <div
                className={clsx(classes.movieNavItem, {
                  [classes.movieNavItemSelected]:
                    selectedGenre === DEFAULT_GENRES.upcoming,
                })}
                onClick={() => {
                  handleGenreChange(DEFAULT_GENRES.upcoming); //using id as string to not override api ids which can be any number
                }}
              >
                Upcoming
              </div>
              {genres.map((genre) => (
                <div
                  className={clsx(classes.movieNavItem, {
                    [classes.movieNavItemSelected]: selectedGenre === genre.id,
                  })}
                  key={genre.id}
                  onClick={() => {
                    handleGenreChange(genre.id);
                  }}
                >
                  {genre.name}
                </div>
              ))}
            </div>
          </>
        )}
        <InfiniteScroll
          dataLength={movies.length}
          next={loadMore}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className={classes.cardsWrapper}>
            {movies.map((movie) => (
              <Card movieData={movie} key={movie.id} />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};
export default Home;
