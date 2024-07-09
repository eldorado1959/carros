"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carro = void 0;
var carros_1 = require("./carros");
/**
 * Base de dados com 10 carros, cada um com um consumo específico e nível inicial de combustível.
 */
exports.carro = [
    { nome: 'D20', carro: new carros_1.Carro(12, 50) },
    { nome: 'Opala', carro: new carros_1.Carro(4, 40) },
    { nome: 'Chevete', carro: new carros_1.Carro(10, 60) },
    { nome: 'Fusca', carro: new carros_1.Carro(10, 15) },
    { nome: 'Ecosport', carro: new carros_1.Carro(11, 70) },
    { nome: 'Carro6', carro: new carros_1.Carro(7, 35) },
    { nome: 'Carro7', carro: new carros_1.Carro(10, 45) },
    { nome: 'Carro8', carro: new carros_1.Carro(13, 65) },
    { nome: 'Carro9', carro: new carros_1.Carro(6, 30) },
    { nome: 'Carro10', carro: new carros_1.Carro(14, 75) }
];
console.log('Relacao de carros disponiveis');
console.log(' ------------------------------------------');
console.log('| D20 | Opala | Chevete | Fusca | Ecosport |');
console.log('| car06 | Car07 | Car08 | Car09 | Car10    |');
console.log(' ------------------------------------------');
console.log('Saindo bancoDeDados.....');
