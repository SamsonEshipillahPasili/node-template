import express, {Express, Request, Response} from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import pino from 'pino';

dotenv.config();
const logger = pino();
// logger.info('Heya Pino');
const PORT = process.env.PORT || 3000;

export const app: Express = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('common'));

app.get('/', (req: Request, res: Response) => {
    res.send('<p>Welcome to Greatness</p>');
});

export function run() {
    app.listen(PORT, () => {
        console.log(`Server started on port: ${PORT} ⚡`);
    });
}