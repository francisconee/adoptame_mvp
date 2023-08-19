import express, { Router } from 'express';
import mascotasController from '../controllers/mascotasController';

class MascotasRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', mascotasController.list);
        this.router.get('/:id', mascotasController.getOne);
        this.router.post('/', mascotasController.create);
        this.router.put('/:id', mascotasController.update);
        this.router.delete('/:id', mascotasController.delete);
    }

}

export default new MascotasRoutes().router;

