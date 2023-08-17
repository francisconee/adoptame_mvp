import { Request, Response } from 'express';
import multer from 'multer';


import pool from '../database';
const upload = multer({ dest: 'server/uploads/' }); // Configura la ubicación para almacenar los archivos subidos

class MascotasController {

    public async list(req: Request, res: Response): Promise<void> {
        const mascotas = await pool.query('SELECT * FROM mascotas');
        res.json(mascotas);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const mascotas = await pool.query('SELECT * FROM mascotas WHERE id = ?', [id]);
        console.log(mascotas.length);
        if (mascotas.length > 0) {
            return res.json(mascotas[0]);
        }
        res.status(404).json({ text: "The game doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO mascotas set ?', [req.body]);
        res.json({ message: 'Game Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldMascota = req.body;
        await pool.query('UPDATE mascotas set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "The game was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM mascotas WHERE id = ?', [id]);
        res.json({ message: "The game was deleted" });
    }
    
    public uploadImage(req: Request, res: Response) {
        // Verificar que el archivo se haya subido correctamente
    if (!req.file) {
        return res.status(400).json({ message: 'No se ha subido ningún archivo' });
      }
  
      // Obtener el nombre del archivo y su ubicación temporal en el servidor
      const fileName = req.file.filename;
      const filePath = req.file.path;
  
      // Mover el archivo desde su ubicación temporal a la carpeta deseada en el servidor
      // En este ejemplo, moveremos el archivo a la carpeta "uploads" en la raíz del proyecto
      // Puedes cambiar la ubicación de destino según tus necesidades
      const fs = require('fs');
      const path = require('path');
      const targetFolder = path.join(__dirname, '../uploads'); // Ruta de la carpeta de destino
      const targetPath = path.join(targetFolder, fileName);
  
      fs.renameSync(filePath, targetPath); // Mover el archivo a la carpeta de destino
  
      // Realizar cualquier lógica adicional, como guardar el nombre del archivo en la base de datos
      // En este ejemplo, simplemente enviaremos el nombre del archivo en la respuesta JSON
      res.json({ message: 'Imagen subida correctamente', fileName: fileName });
    }
}

export default MascotasController;