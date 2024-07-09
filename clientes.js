"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Cria uma nova data representando o momento atual
var data = new Date();
// Obtém as horas, minutos e segundos, convertendo para string e garantindo dois dígitos
var horas = data.getHours().toString().padStart(2, '0');
var minutos = data.getMinutes().toString().padStart(2, '0');
var segundos = data.getSeconds().toString().padStart(2, '0');
// Combina horas, minutos e segundos no formato hh:mm:ss
var hhmmss = [horas, minutos, segundos].join(':');
// Adiciona padding à esquerda até que a string tenha 120 caracteres
console.log(hhmmss.padStart(120, ' '));
// cliente.ts
var baseDeDados_1 = require("./baseDeDados");
var readlineSync = require("readline-sync");
function interagirComUsuario() {
    // Pergunta ao usuário o nome do carro que ele deseja usar
    var nomeCarro = readlineSync.question('Nome do carro: ');
    var carroEncontrado = baseDeDados_1.carro.find(function (c) { return c.nome === nomeCarro; });
    // arrow function) verifica se a propriedade nome do elemento
    // atual (c) é estritamente igual ao valor de nomeCarro
    if (carroEncontrado) { // Se carro foi encontrado
        // qual qtde de combustível a ser adicionada
        var quantidadeCombustivel = readlineSync.question('Quant.de combustivel a adicionar (em litros): ');
        carroEncontrado.carro.adicionarGasolina(parseFloat(quantidadeCombustivel)); // Adiciona combustível
        //converte quantidadeCombustivel p/01 numero 
        // Pergunta a distância que o usuário deseja percorrer
        var distancia = readlineSync.question('Distancia pretendica a percorrer (em km): '); // converte distancia p/01 numero
        carroEncontrado.carro.andar(parseFloat(distancia)); // Simula a condução do carro
        //converte distancia p/01 numero 
        // Verifica o nível de combustível
        var resposta = readlineSync.question('Deseja verificar o nivel de combustivel? (sim/nao): ');
        if (resposta.toLowerCase() === 'sim') { // verifica se a resposta do usuário, convertida para minúsculas, é igual à string 
            // Se sim, exibe o nível de combustível
            console.log("N\u00EDvel atual de combust\u00EDvel: ".concat(carroEncontrado.carro.obterGasolina().toFixed(2), " L"));
        }
    }
    else {
        console.log('Carro não encontrado.');
    }
}
// Inicia a interação com o usuário
interagirComUsuario();
console.log('saindo Clientes....');
