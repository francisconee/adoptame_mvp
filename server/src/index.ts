import express, { Application, urlencoded } from 'express'
import indexRoutes from './routes/indexRoutes';
import mascotasRoutes from './routes/mascotasRoutes';
import morgan from 'morgan';
import cors from 'cors';

class Server{
    
    public app: Application;
    
    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }
    config(): void{
        this.app.set('port', process.env.PORT || 3000)
        this.app.use(morgan('dev'))
        this.app.use(cors())
        this.app.use(express.json());
        this.app.use(urlencoded({extended: false}));
        this.app.use('/uploads')
    }
    routes(): void{
        this.app.use('/',indexRoutes)
        this.app.use('/api/mascotas', mascotasRoutes)
    }
    start(): void{
        this.app.listen(this.app.get('port'))
        console.log('Server on port', this.app.get('port'))
    }

}


const server = new Server();
server.start();

function use(indexRoutes: express.Router) {
    throw new Error('Function not implemented.');
}