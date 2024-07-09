// Carro.ts
/**
 * Classe Carro que representa um veículo com consumo de combustível e quantidade de combustível no tanque.
 */
export class Carro {
    private consumo: number; // Consumo de combustível em km/L
    private nivelCombustivel: number; // Nível de combustível no tanque

    /**
     * Construtor para inicializar o consumo e o nível de combustível.
     * consumo - Consumo de combustível em km/L
     * nivelCombustivel - Nível de combustível no tanque (padrão é 0)
     */
    constructor(consumo: number, nivelCombustivel: number = 0) {
        this.consumo = consumo;
        this.nivelCombustivel = nivelCombustivel;
    }

    /**
     * Método para simular o ato de dirigir o veículo por uma certa distância.
     * Reduz o nível de combustível no tanque.
     * distancia - Distância percorrida em km
     */
    andar(distancia: number): void {
        const combustivelNecessario = distancia / this.consumo; // Calcula o combustível necessário para percorrer a distância
        if (combustivelNecessario <= this.nivelCombustivel) { // Verifica se há combustível suficiente
            this.nivelCombustivel -= combustivelNecessario; // Reduz o nível de combustível
            console.log(`Você andou ${distancia} km. Combustível restante: ${this.nivelCombustivel.toFixed(2)} L`);
        } else {
            console.log('Combustível insuficiente para percorrer a distância desejada.');
        }
    }

    /**
     * Método para obter o nível atual de combustível.
     * Nível atual de combustível
     */
    obterGasolina(): number {
        return this.nivelCombustivel;
    }

    /**
     * Método para adicionar combustível ao tanque.
     * quantidade - Quantidade de combustível a ser adicionada
     */
    adicionarGasolina(quantidade: number): void {
        this.nivelCombustivel += quantidade; // Adiciona combustível ao tanque
        console.log(`Foram adicionados ${quantidade} L de combustível. Nível atual: ${this.nivelCombustivel.toFixed(2)} L`);
    }
}

console.log('encerrando carros');