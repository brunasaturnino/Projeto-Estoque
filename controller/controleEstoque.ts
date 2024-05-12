import Estoque  from '../service/serviceEstoque'; 
import {Item} from '../model/interfaceData'
import * as fs from 'fs';

export async function adicionarItem(data:Item){
    try{
        await Estoque.criar(data)
        console.log("Produto adicionado com sucesso.\n");
    }catch(error){
        console.log("Erro ao adicionar produto:", error);
    }
}


export async function removerItem(nome:string){
    try{
        await Estoque.remover(nome)
        console.log(`Item removido com sucesso.\n`)
    }catch(error){
        console.log("Erro ao remover produto:", error);
    }
}


export async function listarItens() {
    try {
        await Estoque.listar();
    } catch (error) {
        console.log("Erro ao listar itens:", error);
    }
}

export async function valorTotal(){
    try {
        const total=await Estoque.valorT();
        console.log(`Valor total do estoque: ${total}\n`)
    }catch(error){
        console.log("Erro ao calcular:", error);
    }
}

export async function pesoTotal(){
    try {
        const total=await Estoque.pesoT();
        console.log(`Peso total do estoque: ${total}\n`)
    }catch(error){
        console.log("Erro ao calcular:", error);
    }
}
export async function quantidadeTotal(){
    try {
        const total=await Estoque.quantidadeT();
        console.log(`Quantidade total de itens do estoque: ${total}\n`)
    }catch(error){
        console.log("Erro ao calcular:", error);
    }
}

export async function mediaValor(){
    try {
        const total=await Estoque.mediaV();
        console.log(`Valor médio do estoque: ${total}\n`)
}catch(error){
    console.log("Erro ao calcular:", error);
}
}
export async function mediaPeso(){
    try {
        const total=await Estoque.mediaP();
        console.log(`Peso médio do estoque: ${total}\n`)
    }catch(error){
        console.log("Erro ao calcular:", error);
    }
}

export async function quantidadeProdutos() {
    try {
        const total=await Estoque.quantidadeP();
        console.log(`Quantidade total de produtos do estoque: ${total}\n`)
    }catch(error){
        console.log("Erro ao calcular:", error);
    }
}