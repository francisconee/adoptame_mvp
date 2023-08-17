import express, { Request, Response } from 'express'

const app = express();

class IndexController {
    
    public index (req: Request, res: Response){
        res.json({text: 'API is in /api/mascotas'});
    }

}

export const indexController = new IndexController;