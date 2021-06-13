export const FILTER_OPTIONS = [
  {
    id: 'title',
    name: 'Title',
  },
];
export const COLUMNS = [
  {
    id: '1',
    label: '',
    width: '100px',
  },
  {
    id: '2',
    label: 'Title',
  },
];
export const ENDPOINTS = {
  now_playing: '/movie/now_playing',
  upcoming: '/movie/upcoming',
  genres: '/genre/movie/list',
  popular: '/movie/popular',
  search: '/search/movie',
};
export const DEFAULT_GENRES = {
  now_playing: 'now_playing',
  upcoming: 'upcoming',
};
