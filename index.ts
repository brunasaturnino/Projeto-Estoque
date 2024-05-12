import {Item} from './model/interfaceData'
import {adicionarItem, removerItem,listarItens,valorTotal,pesoTotal,quantidadeTotal,mediaValor,mediaPeso,quantidadeProdutos} from './controller/controleEstoque.js'
import * as fs from 'fs';


const prompt=require('prompt-sync')({sigint:true});
async function main() {

    while (true) {
        console.log("\n1. Adicionar Item ao Inventário");
        console.log("2. Remover Item do Inventário");
        console.log("3. Listar Itens do Inventário");
        console.log("4. Ver Valor Total do Inventário");
        console.log("5. Ver Peso Total do Inventário");
        console.log("6. Calcular Média de Valor dos Itens");
        console.log("7. Calcular Média de Peso dos Itens");
        console.log("8. Ver Quantidade Total de Itens no Inventário");
        console.log("9. Ver Quantidade Total de Produtos no Inventário");
        console.log("0. Sair");

        const opcao = prompt("\nEscolha uma opção: ");

        switch (opcao) {
            case '1':
                var X = prompt("Nome do item: ");
                var Y = prompt("Peso do item: ");
                var Z = prompt("Valor do item: ");
                var W = prompt("Quantidade do item: ");
                if(X!= null && Y!= null && Z!= null && W!= null){
                    const dados={
                        nome:X,
                        peso: parseFloat(Y),
                        valor:parseFloat(Z),
                        quantidade:parseFloat(W)
                    } as Item
    
                    await adicionarItem(dados);
                    break;
                }
                
            case '2':

            var nomeItemRemover = prompt("Nome do item: ");
            await removerItem(nomeItemRemover);
            break;


            case '3':
                console.log("Itens no inventário:");
                await listarItens();
                break;

            case '4':
                await valorTotal();
                break;

            case '5':
                await pesoTotal();
                break;
                
            case '6':
                await mediaValor();
                break;
                
            case '7':
                await mediaPeso();
                break;

            case '8':
                await quantidadeTotal();
                break;

            case '9':
                await quantidadeProdutos();
                break;

            case '0':
                console.log("Saindo");
                return;

            default:
                console.log("Opção inválida. Por favor, escolha uma opção válida.");
        }
    }
}

main();
