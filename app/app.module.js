'use strict';

import 'jquery';
import angular from 'angular';
import ngAnimate from 'angular-animate';
import ngRoute from 'angular-route';

import 'bootstrap/dist/css/bootstrap.min.css'
import './app.animations.css'
import './app.css'

import CoreModule from './core/core.module';
import PhoneListModule from './phone-list/phone-list.module';
import PhoneDetailModule from './phone-detail/phone-detail.module';
import { phoneAnimationFactory } from './app.animations';
import { config } from './app.config';

// Define the `phonecatApp` module
angular
  .module('phonecatApp', [
    ngAnimate,
    ngRoute,
    CoreModule,
    PhoneDetailModule,
    PhoneListModule
  ])
  .animation('.phone', phoneAnimationFactory)
  .config(['$routeProvider', config]);