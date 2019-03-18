import angular from 'angular';
import { forEach } from '@uirouter/core';
class AlunoService{

	constructor($http){
		this.$http = $http;
		this.path = "http://localhost:8080/aluno";
	}

	//retorna todos os alunos e suas mochilas:
	getAlunos(){
		return this.$http({
			method : 'GET',
			url : this.path
		});
	};

	setAluno(aluno){
		console.log("Acionou service setAluno");
		return this.$http({
	        method : 'POST',
	        url : this.path,
	        data : {
				"nome": aluno.nome,
				"turma": aluno.turma,
				"mochilas": [
					{
						"marca" : aluno.mochila
					}
				]
			}
    	});
	}

	updateAluno(aluno){
		console.log("Método updateAluno() acionado - " + aluno.id);
		return this.$http.put(this.path,aluno);
	}

	setMochila(mochila, aluno){
		console.log("Acionou service mochila" - mochila.marca);
		return this.$http({
	        method : 'POST',
	        url : 'http://localhost:8080/mochila',
			data : {
				"marca": mochila.marca,
				"aluno": {
					"id": aluno.id
				}
			}
    	});
	}

	deleteAluno(id){
		console.log("Acionou service mochila" - mochila.marca);
		return this.$http.delete("http://localhost:8080/aluno/" + id);
	}

	deletaMochilaDoAluno(id){
		return this.$http.delete("http://localhost:8080/mochila/" + id);
	}

}
export default angular.module('services.aluno-service', [])
.service('alunoService', AlunoService)
.name;