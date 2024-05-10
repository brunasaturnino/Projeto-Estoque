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
exports.quantidadeProdutos = exports.mediaPeso = exports.mediaValor = exports.quantidadeTotal = exports.pesoTotal = exports.valorTotal = exports.listarItens = exports.removerItem = exports.adicionarItem = void 0;
const serviceEstoque_1 = __importDefault(require("../service/serviceEstoque"));
function adicionarItem(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield serviceEstoque_1.default.criar(data);
            console.log("Produto adicionado com sucesso.");
        }
        catch (error) {
            console.log("Erro ao adicionar produto:", error);
        }
    });
}
exports.adicionarItem = adicionarItem;
function removerItem(nome) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield serviceEstoque_1.default.remover(nome);
        }
        catch (error) {
            console.log("Erro ao remover produto:", error);
        }
    });
}
exports.removerItem = removerItem;
function listarItens() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield serviceEstoque_1.default.listar();
        }
        catch (error) {
            console.log("Erro ao listar itens:", error);
        }
    });
}
exports.listarItens = listarItens;
function valorTotal() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const dados = yield serviceEstoque_1.default.valorT();
        }
        catch (error) {
            console.log("Erro ao calcular:", error);
        }
    });
}
exports.valorTotal = valorTotal;
function pesoTotal() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const dados = yield serviceEstoque_1.default.pesoT();
        }
        catch (error) {
            console.log("Erro ao calcular:", error);
        }
    });
}
exports.pesoTotal = pesoTotal;
function quantidadeTotal() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const dados = yield serviceEstoque_1.default.quantidadeT();
        }
        catch (error) {
            console.log("Erro ao calcular:", error);
        }
    });
}
exports.quantidadeTotal = quantidadeTotal;
function mediaValor() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const dados = yield serviceEstoque_1.default.mediaV();
        }
        catch (error) {
            console.log("Erro ao calcular:", error);
        }
    });
}
exports.mediaValor = mediaValor;
function mediaPeso() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const dados = yield serviceEstoque_1.default.mediaP();
        }
        catch (error) {
            console.log("Erro ao calcular:", error);
        }
    });
}
exports.mediaPeso = mediaPeso;
function quantidadeProdutos() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const dados = yield serviceEstoque_1.default.quantidadeP();
        }
        catch (error) {
            console.log("Erro ao calcular:", error);
        }
    });
}
exports.quantidadeProdutos = quantidadeProdutos;
