'use strict';

import angular from 'angular';
import ngResource from 'angular-resource';

import { PhonesService } from './phone.service';

// Define the `core.phone` module
export default angular
  .module('core.phone', [ngResource])
  .factory('Phone', PhonesService)
  .name;
