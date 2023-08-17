"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
class IndexController {
    index(req, res) {
        res.json({ text: 'API is in /api/mascotas' });
    }
}
exports.indexController = new IndexController;
