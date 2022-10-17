import express from 'express';
import morgan from 'morgan';
import route from './routers/route';

const message: string = 'HEY GUYS';
console.log(message);

const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.status(200).send('My Server is working, HEY THERE');
});

app.use(morgan('dev'));

app.use('/', route);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
export default app;
