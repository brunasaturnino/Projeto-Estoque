class Item {
    nome: string;
    peso: number;
    valor: number;
    quantidade: number;

    constructor(nome: string, peso: number, valor: number, quantidade: number) {
        this.nome = nome;
        this.peso = peso;
        this.valor = valor;
        this.quantidade = quantidade;
    }
}

import * as fs from 'fs';

export class Estoque {
    private items: Item[] = [];
    private readonly csvFilePath: string;

    constructor(csvFilePath: string) {
        this.csvFilePath = csvFilePath;
    }

    public adicionarItem(nome: string, peso: number, valor: number, quantidade: number) {
        try{
            if (!nome || isNaN(peso) || isNaN(valor) || isNaN(quantidade) || peso <= 0 || valor <= 0 || quantidade <= 0) {
                throw new Error("Por favor, forneça informações válidas para adicionar o item.");
            }
            const itemExistente = this.items.find(item => item.nome === nome);
            if (itemExistente) {
                throw new Error("Este item já existe no inventário. Por favor, forneça um nome de item único.");
            }
        const novoItem = new Item(nome, peso, valor, quantidade);
        this.items.push(novoItem);
        this.salvarEstoqueNoCSV();
        return "Item adicionado ao inventário com sucesso.";
        }catch (error) {
            return error.message;
        }
    }

        public removerItem(nome: string): string {
            try {
                const itemIndex = this.items.findIndex(item => item.nome === nome);
        
                if (itemIndex === -1) {
                    throw new Error("O item não foi encontrado no inventário.");
                }
        
                const itemRemovido = this.items.splice(itemIndex, 1)[0];
                this.salvarEstoqueNoCSV();
        
                return `Item removido do inventário: ${itemRemovido.nome}, Peso: ${itemRemovido.peso}, Valor: ${itemRemovido.valor}, Quantidade: ${itemRemovido.quantidade}`;
            } catch (error) {
                return error.message;
            }
        }
    

    public listarItens(){
        return this.items;
    }

    public valorTotal(): number {
        return this.items.reduce((total, item) => total + (item.valor * item.quantidade), 0);
    }

    public pesoTotal(): number {
        return this.items.reduce((total, item) => total + (item.peso * item.quantidade), 0);
    }

    public mediaValor(): number {
        const totalValor = this.valorTotal();
        const quantidadeTotal = this.quantidadeTotal();
        return totalValor / quantidadeTotal;
    }

    public mediaPeso(): number {
        const totalPeso = this.pesoTotal();
        const quantidadeTotal = this.quantidadeTotal();
        return totalPeso / quantidadeTotal;
    }

    public quantidadeTotal(): number {
        return this.items.reduce((total, item) => total + item.quantidade, 0);
    }

    public quantidadeProdutos():number{
        const nomesUnicos = new Set<string>();
        this.items.forEach(item => {nomesUnicos.add(item.nome);});
        return nomesUnicos.size;
}

    private carregarEstoqueDoCSV(): void {
        if (fs.existsSync(this.csvFilePath)) {
            const csvData = fs.readFileSync(this.csvFilePath, 'utf-8');
            const rows = csvData.trim().split('\n');
            this.items = rows.map(row => {
                const [nome, peso, valor, quantidade] = row.split(',');
                return new Item(nome, parseFloat(peso), parseFloat(valor), parseInt(quantidade));
            });
        }
    }

    private salvarEstoqueNoCSV(): void {
        const csvData = this.items.map(item => `${item.nome},${item.peso},${item.valor},${item.quantidade}`).join('\n');
        fs.writeFileSync(this.csvFilePath, csvData);
    }
}
