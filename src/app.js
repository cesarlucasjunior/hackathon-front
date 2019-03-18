'use strict';

import angular from 'angular'
import uirouter from 'angular-ui-router';
var blockUI = require('angular-block-ui');

import 'bootstrap';
import './scss/app.scss';

import routing from './app.config';

import aluno from './modulos/aluno/aluno.js';
import dono from './modulos/dono/dono.js';
import home from './modulos/home/home.js';

angular
.module('myApp', [
  uirouter,
  blockUI,
  aluno,
  dono, 
  home
 ])
.config(routing);


