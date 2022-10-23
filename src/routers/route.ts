import express from 'express';
import { Request, Response } from 'express';
import imgProcess from '../utls/sharpimg';

const Router = express.Router();

Router.get('/resize', async (req: Request, res: Response) => {
  let { imgName, w, h } = req.query as {
    imgName: string;
    w: string;
    h: string;
  };

  if (!imgName) return res.status(404).send('ERR img have invalid params name');
  if (!w) return res.status(404).send('ERR img have invalid params width');
  if (!h) return res.status(404).send('ERR img have invalid params height');

  // it should retun http://localhost:3000/resize?imgName=myLogo4&w=200&h=200
  const sharped = await imgProcess(imgName, w, h);

  if (!sharped.sharped)
    return res.status(400).json('ERR HAndling' + sharped.err);
  return res.status(200).sendFile(sharped.file);
});

export default Router;
