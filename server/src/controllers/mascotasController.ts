import { Request, Response } from 'express';
import bcrypt from 'bcrypt'


import pool from '../database';


class MascotasController {
    public async list(req: Request, res: Response): Promise<void> {
        const mascotas = await pool.query('SELECT * FROM mascotasv2');
        res.json(mascotas);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const mascotas = await pool.query('SELECT * FROM mascotasv2 WHERE id = ?', [id]);
        console.log(mascotas.length);
        if (mascotas.length > 0) {
            return res.json(mascotas[0]);
        }
        res.status(404).json({ text: "la mascota ya fue adoptada" });
    }

    public async create(req: Request, res: Response): Promise<any> {
        console.log(req)
        const result = await pool.query('INSERT INTO mascotasv2 set ?', [req.body]);
        res.json({ message: 'Mascota guardada' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE mascotasv2 set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "la mascota fue actualizada" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM mascotasv2 WHERE id = ?', [id]);
        res.json({ message: "la mascota fue eliminada" });
    }
}

const mascotasController  = new MascotasController;
export default mascotasController;