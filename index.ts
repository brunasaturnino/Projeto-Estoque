import { Estoque } from './controller/controleEstoque'; 

function lerEntrada(mensagem: string): Promise<string> {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise<string>((resolve) => {
        readline.question(mensagem, (resposta: string) => {
            resolve(resposta);
            readline.close();
        });
    });
}

async function main() {
    const estoque = new Estoque('estoque.csv');

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

        const opcao = await lerEntrada("\nEscolha uma opção: ");

        switch (opcao) {
            case '1':
                const nome = await lerEntrada("Nome do item: ");
                const peso = parseFloat(await lerEntrada("Peso do item: "));
                const valor = parseFloat(await lerEntrada("Valor do item: "));
                const quantidade = parseInt(await lerEntrada("Quantidade do item: "));

                estoque.adicionarItem(nome, peso, valor, quantidade);
                console.log("Item adicionado com sucesso!");
                break;

            case '2':
                const nomeItemRemover = await lerEntrada("Nome do item a ser removido: ");
                const mensagemRemocao = estoque.removerItem(nomeItemRemover);
                console.log(mensagemRemocao);
                break;

            case '3':
                console.log("Itens no inventário:");
                console.log(estoque.listarItens());
                break;

            case '4':
                console.log("Valor total do inventário:", estoque.valorTotal());
                break;

            case '5':
                console.log("Peso total do inventário:", estoque.pesoTotal());
                break;

            case '6':
                console.log("Média de valor dos itens:", estoque.mediaValor());
                break;

            case '7':
                console.log("Média de peso dos itens:", estoque.mediaPeso());
                break;

            case '8':
                console.log("Quantidade total de itens no inventário:", estoque.quantidadeTotal());
                break;

            case '9':
                console.log("Quantidade total de produtos no inventário:", estoque.quantidadeProdutos());
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
