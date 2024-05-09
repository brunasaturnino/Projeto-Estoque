import Estoque  from '../service/serviceEstoque'; 
import {Item} from '../model/interfaceData'


export async function adicionarItem(data:Item){
    try{
        await Estoque.criar(data)
        console.log("Produto adicionado com sucesso.");
    }catch(error){
        console.log("Erro ao adicionar produto:", error);
    }
}


export async function removerItem(nome:string){
    try{
        await Estoque.remover(nome)
    }catch(error){
        console.log("Erro ao remover produto:", error);
    }
}


export async function listarItens() {
    try {
        const dados = await Estoque.listar();
    } catch (error) {
        console.log("Erro ao listar itens:", error);
    }
}

export async function valorTotal(){
    try {
        const dados = await Estoque.valorT();
    }catch(error){
        console.log("Erro ao calcular:", error);
    }
}

export async function pesoTotal(){
    try {
        const dados = await Estoque.pesoT();
    }catch(error){
        console.log("Erro ao calcular:", error);
    }
}
export async function quantidadeTotal(){
    try {
        const dados = await Estoque.quantidadeT();
    }catch(error){
        console.log("Erro ao calcular:", error);
    }
}

export async function mediaValor(){
    try {
    const dados = await Estoque.mediaV();
}catch(error){
    console.log("Erro ao calcular:", error);
}
}
export async function mediaPeso(){
    try {
        const dados = await Estoque.mediaP();
    }catch(error){
        console.log("Erro ao calcular:", error);
    }
}

export async function quantidadeProdutos() {
    try {
        const dados = await Estoque.quantidadeP();
    }catch(error){
        console.log("Erro ao calcular:", error);
    }
}