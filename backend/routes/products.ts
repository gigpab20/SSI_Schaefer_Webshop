import express, {Router, Request, Response} from "express";
import {getAll, getAllInPrice} from "../src/db/util.service.db";
import {HardwareInt} from "../src/model/HardwareInt"

let router = express.Router();

router.get  ('/', async (req: Request, res:Response) =>{

  const result = await getAll();
  res.json(result)
});

router.get("/:price", async (req: Request, res: Response) => {
  const priceParam = parseInt(req.params.price);
  console.log("::::::::::::::: in express route :::::::::::::::");
  console.log(priceParam);

  const dbResponse = await getAllInPrice(priceParam);

  console.log(dbResponse);

  res.json(dbResponse);
})

module.exports = router;

