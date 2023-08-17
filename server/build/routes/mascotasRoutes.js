"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mascotasController_1 = __importDefault(require("../controllers/mascotasController"));
class MascotasRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', mascotasController_1.default.list);
        this.router.get('/:id', mascotasController_1.default.getOne);
        this.router.post('/', mascotasController_1.default.create);
        this.router.delete('/:id', mascotasController_1.default.delete);
        this.router.put('/:id', mascotasController_1.default.update);
    }
}
const mascotasRoutes = new MascotasRoutes();
exports.default = mascotasRoutes.router;
