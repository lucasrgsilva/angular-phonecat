'use strict';

import angular from 'angular';

import { PhoneListCompoent } from './phone-list.component'

// Define the `phoneList` module
export default angular
  .module('phoneList', ['core.phone'])
  .component('phoneList', PhoneListCompoent)
  .name;
