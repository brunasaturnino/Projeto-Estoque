"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const controleEstoque_js_1 = require("./controller/controleEstoque.js");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
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
                    if (X != null && Y != null && Z != null && W != null) {
                        const dados = {
                            nome: X,
                            peso: parseFloat(Y),
                            valor: parseFloat(Z),
                            quantidade: parseFloat(W)
                        };
                        yield (0, controleEstoque_js_1.adicionarItem)(dados);
                        break;
                    }
                case '2':
                    var nomeItemRemover = prompt("Nome do item: ");
                    if (nomeItemRemover !== null) {
                        yield (0, controleEstoque_js_1.removerItem)(nomeItemRemover);
                    }
                    else {
                        console.log("Nenhum nome de item fornecido.");
                    }
                    break;
                case '3':
                    console.log("Itens no inventário:");
                    (0, controleEstoque_js_1.listarItens)();
                    break;
                case '4':
                    const total = yield (0, controleEstoque_js_1.valorTotal)();
                    console.log('"Valor total do inventário:", ${total}');
                    break;
                case '5':
                    const pesot = yield (0, controleEstoque_js_1.pesoTotal)();
                    console.log('"Peso total do inventário:", ${pesot}');
                    break;
                case '6':
                    const mediat = yield (0, controleEstoque_js_1.mediaValor)();
                    console.log('"Média de valor dos itens:", ${mediat}');
                case '7':
                    const mediap = yield (0, controleEstoque_js_1.mediaPeso)();
                    console.log('"Média de peso dos itens:", ${mediap}');
                    break;
                case '8':
                    const quantidadet = yield (0, controleEstoque_js_1.quantidadeTotal)();
                    console.log('"Quantidade total de items no inventário:", ${quantidadet}');
                    break;
                case '9':
                    const quantidadep = yield (0, controleEstoque_js_1.quantidadeProdutos)();
                    console.log('"Quantidade total de produtos no inventário:", ${quantidadep}');
                    break;
                case '0':
                    console.log("Saindo");
                    return;
                default:
                    console.log("Opção inválida. Por favor, escolha uma opção válida.");
            }
        }
    });
}
main();
