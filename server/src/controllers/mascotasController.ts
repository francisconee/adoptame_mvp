import { Request, Response } from 'express';


import pool from '../database';

class MascotasController {

    public async list(req: Request, res: Response): Promise<void> {
        const games = await pool.query('SELECT * FROM mascotasv2');
        res.json(games);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM mascotasv2 WHERE id = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "The game doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<any> {
        console.log(req)
        const result = await pool.query('INSERT INTO mascotasv2 set ?', [req.body]);
        res.json({ message: 'Game Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE mascotasv2 set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "The game was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM mascotasv2 WHERE id = ?', [id]);
        res.json({ message: "The game was deleted" });
    }
}

const mascotasController  = new MascotasController;
export default mascotasController;