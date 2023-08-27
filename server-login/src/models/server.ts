import express, {Application} from 'express';
import cors from 'cors';
import routesProduct from '../routes/product';
import routesUser from '../routes/user';
import db from '../db/connection';
import { User } from './user';

class Server {

    private app: Application;
    private port: string;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '3001' ;
        this.listen();
        this.dbConnect();
        this.midlewares();
        this.routes();
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('aplicacion corriendo en el puerto ' + this.port);
        });
    }

    routes(){
        this.app.use('/api/products', routesProduct);
        this.app.use('/api/users', routesUser);
    }

    midlewares(){
        // Parseo body
        this.app.use(express.json());

        // Cors
        this.app.use(cors());
    }

    async dbConnect(){
        try{
           await db.authenticate();
           await User.sync()
           console.log('Database online')
        }catch (error) {
            console.error('Unable to connect to the database', error)
        }
    }
}

export default Server;