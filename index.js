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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var controleEstoque_1 = require("./controller/controleEstoque");
function lerEntrada(mensagem) {
    var readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise(function (resolve) {
        readline.question(mensagem, function (resposta) {
            resolve(resposta);
            readline.close();
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var estoque, opcao, _a, nome, peso, _b, valor, _c, quantidade, _d, nomeItemRemover, mensagemRemocao;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    estoque = new controleEstoque_1.Estoque('estoque.csv');
                    _e.label = 1;
                case 1:
                    if (!true) return [3 /*break*/, 20];
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
                    return [4 /*yield*/, lerEntrada("\nEscolha uma opção: ")];
                case 2:
                    opcao = _e.sent();
                    _a = opcao;
                    switch (_a) {
                        case '1': return [3 /*break*/, 3];
                        case '2': return [3 /*break*/, 8];
                        case '3': return [3 /*break*/, 10];
                        case '4': return [3 /*break*/, 11];
                        case '5': return [3 /*break*/, 12];
                        case '6': return [3 /*break*/, 13];
                        case '7': return [3 /*break*/, 14];
                        case '8': return [3 /*break*/, 15];
                        case '9': return [3 /*break*/, 16];
                        case '0': return [3 /*break*/, 17];
                    }
                    return [3 /*break*/, 18];
                case 3: return [4 /*yield*/, lerEntrada("Nome do item: ")];
                case 4:
                    nome = _e.sent();
                    _b = parseFloat;
                    return [4 /*yield*/, lerEntrada("Peso do item: ")];
                case 5:
                    peso = _b.apply(void 0, [_e.sent()]);
                    _c = parseFloat;
                    return [4 /*yield*/, lerEntrada("Valor do item: ")];
                case 6:
                    valor = _c.apply(void 0, [_e.sent()]);
                    _d = parseInt;
                    return [4 /*yield*/, lerEntrada("Quantidade do item: ")];
                case 7:
                    quantidade = _d.apply(void 0, [_e.sent()]);
                    estoque.adicionarItem(nome, peso, valor, quantidade);
                    console.log("Item adicionado com sucesso!");
                    return [3 /*break*/, 19];
                case 8: return [4 /*yield*/, lerEntrada("Nome do item a ser removido: ")];
                case 9:
                    nomeItemRemover = _e.sent();
                    mensagemRemocao = estoque.removerItem(nomeItemRemover);
                    console.log(mensagemRemocao);
                    return [3 /*break*/, 19];
                case 10:
                    console.log("Itens no inventário:");
                    console.log(estoque.listarItens());
                    return [3 /*break*/, 19];
                case 11:
                    console.log("Valor total do inventário:", estoque.valorTotal());
                    return [3 /*break*/, 19];
                case 12:
                    console.log("Peso total do inventário:", estoque.pesoTotal());
                    return [3 /*break*/, 19];
                case 13:
                    console.log("Média de valor dos itens:", estoque.mediaValor());
                    return [3 /*break*/, 19];
                case 14:
                    console.log("Média de peso dos itens:", estoque.mediaPeso());
                    return [3 /*break*/, 19];
                case 15:
                    console.log("Quantidade total de itens no inventário:", estoque.quantidadeTotal());
                    return [3 /*break*/, 19];
                case 16:
                    console.log("Quantidade total de produtos no inventário:", estoque.quantidadeProdutos());
                    return [3 /*break*/, 19];
                case 17:
                    console.log("Saindo...");
                    return [2 /*return*/];
                case 18:
                    console.log("Opção inválida. Por favor, escolha uma opção válida.");
                    _e.label = 19;
                case 19: return [3 /*break*/, 1];
                case 20: return [2 /*return*/];
            }
        });
    });
}
main();
