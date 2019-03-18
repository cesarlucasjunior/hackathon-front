routing.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routing($stateProvider, $urlRouterProvider) {
    let alunoState = {
        name: 'aluno',
        url: '/aluno',
        templateUrl: './modulos/aluno/aluno.view.html',
        controller: 'AlunoController',
        controllerAs: 'vm'
      }
      $stateProvider.state(alunoState);
      
    let homeState = {
       name: 'home',
        url: '/home',
        templateUrl: './modulos/home/home.view.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      }
      $stateProvider.state(homeState);
    
      let donoState = {
        name: 'dono',
        url: '/dono',
        templateUrl: './modulos/dono/dono.view.html',
        controller: 'DonoController',
        controllerAs: 'vm'
      }
      $stateProvider.state(donoState);
      
      $urlRouterProvider.otherwise('/home')  
}