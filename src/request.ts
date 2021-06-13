import * as queryString from 'query-string';
import axios from 'axios';
export const __request = (
  url: string,
  queryParams?: { [x: string]: number | string }
) => {
  const params = queryString.stringify(queryParams);
  return axios.get(
    `https://api.themoviedb.org/3${url}?api_key=3c49c3cdfcc72dc26043342f2def425a&${params}
        `
  );
};
