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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estoque = void 0;
const writeCSV_1 = __importDefault(require("../model/writeCSV"));
const readCSV_1 = __importDefault(require("../model/readCSV"));
const filepath = '../model/estoque.csv';
class Estoque {
    criar(data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!data.nome || isNaN(data.peso) || isNaN(data.valor) || isNaN(data.quantidade) || data.peso <= 0 || data.valor <= 0 || data.quantidade <= 0) {
                throw new Error("Por favor, forneça informações válidas para adicionar o item.");
            }
            const dados = yield (0, readCSV_1.default)(filepath);
            const itemExistente = dados.find(item => item.nome === data.nome);
            if (itemExistente) {
                throw new Error("Este item já existe no inventário. Por favor, forneça um nome de item único.");
            }
            else {
                yield (0, writeCSV_1.default)(filepath, [data]);
            }
        });
    }
    remover(nome) {
        return __awaiter(this, void 0, void 0, function* () {
            const dados = yield (0, readCSV_1.default)(filepath);
            const itemIndex = dados.findIndex(item => item.nome === nome);
            if (itemIndex === -1) {
                throw new Error("O item não foi encontrado no inventário.");
            }
            const itemRemovido = dados.splice(itemIndex, 1)[0];
            yield (0, writeCSV_1.default)(filepath, dados);
            return `Item removido do inventário: ${itemRemovido.nome}, Peso: ${itemRemovido.peso}, Valor: ${itemRemovido.valor}, Quantidade: ${itemRemovido.quantidade}`;
        });
    }
    listar() {
        return __awaiter(this, void 0, void 0, function* () {
            const dados = yield (0, readCSV_1.default)(filepath);
            console.log(dados);
        });
    }
    valorT() {
        return __awaiter(this, void 0, void 0, function* () {
            const dados = yield (0, readCSV_1.default)(filepath);
            return dados.reduce((total, dados) => total + (dados.valor * dados.quantidade), 0);
        });
    }
    pesoT() {
        return __awaiter(this, void 0, void 0, function* () {
            const items = yield (0, readCSV_1.default)(filepath);
            return items.reduce((total, items) => total + (items.peso * items.quantidade), 0);
        });
    }
    quantidadeT() {
        return __awaiter(this, void 0, void 0, function* () {
            const dados = yield (0, readCSV_1.default)(filepath);
            return dados.reduce((total, dados) => total + dados.quantidade, 0);
        });
    }
    mediaV() {
        return __awaiter(this, void 0, void 0, function* () {
            const totalValor = yield this.valorT();
            const totalQuantidade = yield this.quantidadeT();
            return totalValor / totalQuantidade;
        });
    }
    mediaP() {
        return __awaiter(this, void 0, void 0, function* () {
            const totalPeso = yield this.pesoT();
            const totalQuantidade = yield this.quantidadeT();
            return totalPeso / totalQuantidade;
        });
    }
    quantidadeP() {
        return __awaiter(this, void 0, void 0, function* () {
            const dados = yield (0, readCSV_1.default)(filepath);
            const nomesUnicos = new Set();
            dados.forEach(dados => { nomesUnicos.add(dados.nome); });
            return nomesUnicos.size;
        });
    }
}
exports.Estoque = Estoque;
exports.default = new Estoque;
