// cliente.ts

import { carro } from './baseDeDados';
import * as readlineSync from 'readline-sync';

function interagirComUsuario() {
    // Pergunta ao usuário o nome do carro que ele deseja usar
    const nomeCarro = readlineSync.question('Nome do carro: ');
    const carroEncontrado = carro.find(c => c.nome === nomeCarro); 
    // arrow function) verifica se a propriedade nome do elemento
    // atual (c) é estritamente igual ao valor de nomeCarro

    if (carroEncontrado) { // Se carro foi encontrado
        // qual qtde de combustível a ser adicionada
        const quantidadeCombustivel = readlineSync.question('Quant.de combustivel a adicionar (em litros): ');
        carroEncontrado.carro.adicionarGasolina(parseFloat(quantidadeCombustivel)); // Adiciona combustível
                                                //converte quantidadeCombustivel p/01 numero 

        // Pergunta a distância que o usuário deseja percorrer
        const distancia = readlineSync.question('Distancia pretendica a percorrer (em km): ');// converte distancia p/01 numero
        carroEncontrado.carro.andar(parseFloat(distancia)); // Simula a condução do carro
                            //converte distancia p/01 numero 

        
        // Verifica o nível de combustível
        const resposta = readlineSync.question('Deseja verificar o nivel de combustivel? (sim/nao): ');
        if (resposta.toLowerCase() === 'sim') { // verifica se a resposta do usuário, convertida para minúsculas, é igual à string 
                                               // Se sim, exibe o nível de combustível
            console.log(`Nível atual de combustível: ${carroEncontrado.carro.obterGasolina().toFixed(2)} L`);
        }
    } else {
        console.log('Carro não encontrado.');
    }
}

// Inicia a interação com o usuário
interagirComUsuario();

console.log('saindo Clientes....');
