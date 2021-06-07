import _ from 'lodash';

export const createDebouceFn = (fn: any, wait: number) => {
  return _.debounce(fn, wait);
};
