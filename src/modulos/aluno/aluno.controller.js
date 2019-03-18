export default class AlunoController{
  
  constructor(alunoService, $scope){
    var vm = this;
    this.name = 'Aluno';

    init();

    function init(){
      alunoService.getAlunos().then(function api(resp) {
        vm.alunos = resp.data;
      });
    }
    $scope.addAluno = function(aluno, $scope){
      console.log("Entrou na controller -" + aluno.nome);
      alunoService.setAluno(aluno).then(function api(resp){
        location.reload();
      });
    }

    $scope.selectAluno = function(aluno){
      $scope.editAluno = aluno;
    }

    $scope.updateAluno = function(aluno){
      alunoService.updateAluno(aluno).then(function api(resp){
        location.reload();
      })
    }

    $scope.selectMochila = function(mochila){
      $scope.editMochila = mochila;
    }

    $scope.addMochila = function(mochila, aluno){
      console.log("SERVICE - " + aluno.id);
      alunoService.setMochila(mochila, aluno).then(function api(resp){
        location.reload();
      })
    }

    $scope.deletaAluno = function(aluno){
      alunoService.deleteAluno(aluno.id).then(function api(resp){
        location.reload();
      })
    }
     
    $scope.deletaMochila = function(id){
      alunoService.deletaMochilaDoAluno(id).then(function api(resp){
        location.reload();
      })
    }
    
    
  

  }
}

AlunoController.$inject = ['alunoService', '$scope'];