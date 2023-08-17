import { Router } from 'express';
import mascotasController  from '../controllers/mascotasController'; // Importa la instancia de la clase

import multer from 'multer';

const express = require('express');
const router = express.Router();

// Configurar el middleware 'multer' para manejar la carga de archivos
const upload = multer({ dest: 'uploads/' });

class MascotasRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    const mascotaController = new mascotasController(); // Crea una instancia de la clase

    this.router.get('/', mascotaController.list);
    this.router.get('/:id', mascotaController.getOne);
    this.router.post('/', mascotaController.create);
    this.router.delete('/:id', mascotaController.delete);
    this.router.put('/:id', mascotaController.update);
    this.router.post('/upload', upload.single('image'), (req, res)=>{
      res.send({data: "OK"});
    });
  }
}

module.exports = router;

const mascotasRoutes = new MascotasRoutes();
export default mascotasRoutes.router;