import angular from 'angular';

class DonoService {

    constructor($http) {
        this.$http = $http;
        //const apiBase = "http://localhost:9090/projeto/api";
        const apiBase = "http://localhost:8080";
        this.path =  apiBase + "/aluno";
    }
    
    getDonos() {
        return this.$http.get(this.path);
    }
}

export default angular.module('services.dono-service', [])
.service('donoService', DonoService)
.name;