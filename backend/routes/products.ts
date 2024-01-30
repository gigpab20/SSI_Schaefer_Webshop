import express, { Router, Request, Response } from "express";
import { oracledb } from "../src/db/util.service.db";


let router = express.Router();


router.get('/', async (req: Request, res:Response) =>{
  const  connection = await oracledb.getConnection();
    const result = await connection.execute('SELECT * FROM ARTIKELTABLE');
    console.log(result.rows);

    res.send(result.rows);
});


module.exports = router;

