'use strict';

export function CheckMarkFilter() {
  return function (input) {
    return input ? '\u2713' : '\u2718';
  };
};
