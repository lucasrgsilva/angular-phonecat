'use strict';

import angular from 'angular';

import { PhoneDetailComponent } from './phone-detail.component';

// Define the `phoneDetail` module
export default angular
  .module('phoneDetail', [
    'ngRoute',
    'core.phone'
  ])
  .component('phoneDetail', PhoneDetailComponent)
  .name;
