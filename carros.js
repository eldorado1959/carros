"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
// Carro.ts
/**
 * Classe Carro que representa um veículo com consumo de combustível e quantidade de combustível no tanque.
 */
var Carro = /** @class */ (function () {
    /**
     * Construtor para inicializar o consumo e o nível de combustível.
     * consumo - Consumo de combustível em km/L
     * nivelCombustivel - Nível de combustível no tanque (padrão é 0)
     */
    function Carro(consumo, nivelCombustivel) {
        if (nivelCombustivel === void 0) { nivelCombustivel = 0; }
        this.consumo = consumo;
        this.nivelCombustivel = nivelCombustivel;
    }
    /**
     * Método para simular o ato de dirigir o veículo por uma certa distância.
     * Reduz o nível de combustível no tanque.
     * distancia - Distância percorrida em km
     */
    Carro.prototype.andar = function (distancia) {
        var combustivelNecessario = distancia / this.consumo; // Calcula o combustível necessário para percorrer a distância
        if (combustivelNecessario <= this.nivelCombustivel) { // Verifica se há combustível suficiente
            this.nivelCombustivel -= combustivelNecessario; // Reduz o nível de combustível
            console.log("Voc\u00EA andou ".concat(distancia, " km. Combust\u00EDvel restante: ").concat(this.nivelCombustivel.toFixed(2), " L"));
        }
        else {
            console.log('Combustível insuficiente para percorrer a distância desejada.');
        }
    };
    /**
     * Método para obter o nível atual de combustível.
     * Nível atual de combustível
     */
    Carro.prototype.obterGasolina = function () {
        return this.nivelCombustivel;
    };
    /**
     * Método para adicionar combustível ao tanque.
     * quantidade - Quantidade de combustível a ser adicionada
     */
    Carro.prototype.adicionarGasolina = function (quantidade) {
        this.nivelCombustivel += quantidade; // Adiciona combustível ao tanque
        console.log("Foram adicionados ".concat(quantidade, " L de combust\u00EDvel. N\u00EDvel atual: ").concat(this.nivelCombustivel.toFixed(2), " L"));
    };
    return Carro;
}());
exports.Carro = Carro;
console.log('encerrando carros');
