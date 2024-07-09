// baseDeDados.ts
import { log } from 'console';
import { Carro } from './carros';

/**
 * Base de dados com 10 carros, cada um com um consumo específico e nível inicial de combustível.
 */
export const carro: { nome: string, carro: Carro }[] = [
    { nome: 'D20', carro: new Carro(12, 50) },
    { nome: 'Opala', carro: new Carro(4, 40) },
    { nome: 'Chevete', carro: new Carro(10, 60) },
    { nome: 'Fusca', carro: new Carro(10, 15) },
    { nome: 'Ecosport', carro: new Carro(11, 70) },
    { nome: 'Carro6', carro: new Carro(7, 35) },
    { nome: 'Carro7', carro: new Carro(10, 45) },
    { nome: 'Carro8', carro: new Carro(13, 65) },
    { nome: 'Carro9', carro: new Carro(6, 30) },
    { nome: 'Carro10', carro: new Carro(14, 75) }
];

console.log('Relacao de carros disponiveis');

console.log( ' ------------------------------------------'); 
console.log( '| D20 | Opala | Chevete | Fusca | Ecosport |'); 
console.log( '| car06 | Car07 | Car08 | Car09 | Car10    |'); 
console.log( ' ------------------------------------------'); 

console.log( 'Saindo bancoDeDados.....'); 





