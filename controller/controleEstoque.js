"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estoque = void 0;
var Item = /** @class */ (function () {
    function Item(nome, peso, valor, quantidade) {
        this.nome = nome;
        this.peso = peso;
        this.valor = valor;
        this.quantidade = quantidade;
    }
    return Item;
}());
var fs = require("fs");
var Estoque = /** @class */ (function () {
    function Estoque(csvFilePath) {
        this.items = [];
        this.csvFilePath = csvFilePath;
    }
    Estoque.prototype.adicionarItem = function (nome, peso, valor, quantidade) {
        try {
            if (!nome || isNaN(peso) || isNaN(valor) || isNaN(quantidade) || peso <= 0 || valor <= 0 || quantidade <= 0) {
                throw new Error("Por favor, forneça informações válidas para adicionar o item.");
            }
            var itemExistente = this.items.find(function (item) { return item.nome === nome; });
            if (itemExistente) {
                throw new Error("Este item já existe no inventário. Por favor, forneça um nome de item único.");
            }
            var novoItem = new Item(nome, peso, valor, quantidade);
            this.items.push(novoItem);
            this.salvarEstoqueNoCSV();
            return "Item adicionado ao inventário com sucesso.";
        }
        catch (error) {
            return error.message;
        }
    };
    Estoque.prototype.removerItem = function (nome) {
        try {
            var itemIndex = this.items.findIndex(function (item) { return item.nome === nome; });
            if (itemIndex === -1) {
                throw new Error("O item não foi encontrado no inventário.");
            }
            var itemRemovido = this.items.splice(itemIndex, 1)[0];
            this.salvarEstoqueNoCSV();
            return "Item removido do invent\u00E1rio: ".concat(itemRemovido.nome, ", Peso: ").concat(itemRemovido.peso, ", Valor: ").concat(itemRemovido.valor, ", Quantidade: ").concat(itemRemovido.quantidade);
        }
        catch (error) {
            return error.message;
        }
    };
    Estoque.prototype.listarItens = function () {
        return this.items;
    };
    Estoque.prototype.valorTotal = function () {
        return this.items.reduce(function (total, item) { return total + (item.valor * item.quantidade); }, 0);
    };
    Estoque.prototype.pesoTotal = function () {
        return this.items.reduce(function (total, item) { return total + (item.peso * item.quantidade); }, 0);
    };
    Estoque.prototype.mediaValor = function () {
        var totalValor = this.valorTotal();
        var quantidadeTotal = this.quantidadeTotal();
        return totalValor / quantidadeTotal;
    };
    Estoque.prototype.mediaPeso = function () {
        var totalPeso = this.pesoTotal();
        var quantidadeTotal = this.quantidadeTotal();
        return totalPeso / quantidadeTotal;
    };
    Estoque.prototype.quantidadeTotal = function () {
        return this.items.reduce(function (total, item) { return total + item.quantidade; }, 0);
    };
    Estoque.prototype.quantidadeProdutos = function () {
        var nomesUnicos = new Set();
        this.items.forEach(function (item) { nomesUnicos.add(item.nome); });
        return nomesUnicos.size;
    };
    Estoque.prototype.carregarEstoqueDoCSV = function () {
        if (fs.existsSync(this.csvFilePath)) {
            var csvData = fs.readFileSync(this.csvFilePath, 'utf-8');
            var rows = csvData.trim().split('\n');
            this.items = rows.map(function (row) {
                var _a = row.split(','), nome = _a[0], peso = _a[1], valor = _a[2], quantidade = _a[3];
                return new Item(nome, parseFloat(peso), parseFloat(valor), parseInt(quantidade));
            });
        }
    };
    Estoque.prototype.salvarEstoqueNoCSV = function () {
        var csvData = this.items.map(function (item) { return "".concat(item.nome, ",").concat(item.peso, ",").concat(item.valor, ",").concat(item.quantidade); }).join('\n');
        fs.writeFileSync(this.csvFilePath, csvData);
    };
    return Estoque;
}());
exports.Estoque = Estoque;
