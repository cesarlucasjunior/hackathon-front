import { inherit } from "@uirouter/core";

export default class DonoController {

  constructor(donoService) {
    var vm = this;
    this.name = 'Aluno';

    init();

    function init(){
      donoService.getDonos().then(function abc(resp) {
        vm.donos = resp.data;
        console.log(vm.donos);
      });
    }
  }
  
}
DonoController.$inject = ['donoService', 'myApp'];
