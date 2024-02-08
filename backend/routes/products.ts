import express, { Router, Request, Response } from "express";
import { getAll } from "../src/db/util.service.db";
import {HardwareInt} from "../src/model/HardwareInt"



let router = express.Router();


router.get  ('/', async (req: Request, res:Response) =>{

  const result = await getAll();
  res.json(result)
});


module.exports = router;

