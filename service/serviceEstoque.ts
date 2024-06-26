import {Item} from '../model/interfaceData'
import writeCSV from '../model/writeCSV'
import readCSV from '../model/readCSV'
import * as fs from 'fs';

const filepath='model/estoque.csv'

export class Estoque {

    async criar(data:Item) {
        if (typeof data.nome !== 'string' || isNaN(data.peso) || isNaN(data.valor) || isNaN(data.quantidade) || data.peso <= 0 || data.valor <= 0 || data.quantidade <= 0) {
            throw new Error("Por favor, forneça informações válidas para adicionar o item.");
        }
        const dados = await readCSV(filepath);
        const itemExistente = dados.find(item => item.nome === data.nome);
        if (itemExistente) {
            throw new Error("Este item já existe no inventário. Por favor, forneça um nome de item único.");
        }
        else{
            await writeCSV(filepath, [data]);
        }
        }
    

    async remover(nome:string){
            const dados = await readCSV(filepath);
            const itemIndex = dados.findIndex(item => item.nome === nome);
            const quantidade= await this.quantidadeP()
            if(quantidade==1){
                throw new Error("Não é possível remover todos os itens do estoque.")
            }
            if (itemIndex === -1) {
                throw new Error("O item não foi encontrado no inventário.");
            }
        
            dados.splice(itemIndex, 1);
            await fs.writeFileSync(filepath, '');
            fs.appendFileSync(filepath, 'nome,valor,peso,quantidade\n');
            await writeCSV(filepath, dados);
        }
    

    async listar() {
        const dados = await readCSV(filepath);
        console.log(dados);
    }
        

    async valorT(): Promise<number> {
        const dados = await readCSV(filepath);
        return dados.reduce((total, dados) => total + (dados.valor * dados.quantidade), 0);
    }

    async pesoT(): Promise<number>{
        const items = await readCSV(filepath);
        return items.reduce((total, items) => total + (items.peso * items.quantidade), 0);
    }

    async quantidadeT(): Promise<number> {
        const items = await readCSV(filepath);
        return items.reduce((total, items) => total + (items.quantidade*1), 0);
    }

    async mediaV(): Promise<number> {
        const totalValor = await this.valorT();
        const totalQuantidade = await this.quantidadeT();
        return totalValor / totalQuantidade;
    }
    
    async mediaP(): Promise<number> {
        const totalPeso = await this.pesoT();
        const totalQuantidade = await this.quantidadeT();
        return totalPeso / totalQuantidade;
    }

    async quantidadeP():Promise<number> {
        const dados = await readCSV(filepath);
        const nomesUnicos = new Set<string>();
        dados.forEach(dados => {nomesUnicos.add(dados.nome);});
        return nomesUnicos.size;
}
}
export default new Estoque