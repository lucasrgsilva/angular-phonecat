'use strict';

import angular from 'angular';

import PhoneModule from './phone/phone.module';
import { CheckMarkFilter } from './checkmark/checkmark.filter'

// Define the `core` module
export default angular
  .module('core', [PhoneModule])
  .filter('checkmark', CheckMarkFilter)
  .name;
