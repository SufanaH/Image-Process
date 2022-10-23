import express from 'express';
import { Request, Response } from 'express';
import morgan from 'morgan';
import Router from './routers/route';
import logger from './utls/logger';

const message: string = 'HEY GUYS';
console.log(message);

const app = express();

const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('My Server is working, HEY THERE');
});
app.use('/images', logger, Router);
app.use(morgan('dev'));

app.use('/', Router);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
export default app;
