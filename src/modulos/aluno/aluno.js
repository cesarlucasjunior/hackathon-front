import angular from 'angular';
import uirouter from 'angular-ui-router';

import AlunoController from './aluno.controller';
import alunoService from '../../servicos/aluno.service';

export default angular.module('aluno', [uirouter, alunoService])
  .controller('AlunoController', AlunoController)
  .name;