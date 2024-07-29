import express, { Router, Request, Response } from "express";
import { getAll, getAllInPrice, updateProduct, reserveHardware, returnHardware, getHardwareTransactions } from "../src/db/util.service.db";
import { HardwareInt } from "../src/model/HardwareInt";

let router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const result = await getAll();
    res.json(result);
  } catch (error: any) {
    console.error("Error in GET /products:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
});

router.get('/:price', async (req: Request, res: Response) => {
  const priceParam = parseInt(req.params.price);
  try {
    const dbResponse = await getAllInPrice(priceParam);
    res.json(dbResponse);
  } catch (error: any) {
    console.error("Error in GET /products/:price:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
});

router.patch('/', async (req: Request, res: Response) => {
  const item = req.body.item;
  try {
    await updateProduct(item);
    res.sendStatus(200);
  } catch (error: any) {
    console.error("Error in PATCH /products:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
});

router.post('/reserve', async (req: Request, res: Response) => {
  const { artikel, anzahl, persnr } = req.body;
  try {
    console.log("Received reserve request:", artikel, anzahl, persnr);
    await reserveHardware(artikel, anzahl, persnr);
    res.sendStatus(200);
  } catch (error: any) {
    console.error("Error in POST /products/reserve:", error);
    res.status(500).json({ message: "Reservation failed", error: error.message || error });
  }
});

router.post('/return', async (req: Request, res: Response) => {
  const { artikel, anzahl, persnr } = req.body;
  try {
    await returnHardware(artikel, anzahl, persnr);
    res.sendStatus(200);
  } catch (error: any) {
    console.error("Error in POST /products/return:", error);
    res.status(500).json({ message: "Return failed", error: error.message || error });
  }
});

router.get('/transactions', async (req: Request, res: Response) => {
  const { datumVon, datumBis } = req.query;
  try {
    const result = await getHardwareTransactions(datumVon as string, datumBis as string);
    res.json(result);
  } catch (error: any) {
    console.error("Error in GET /products/transactions:", error);
    res.status(500).json({ message: "Failed to fetch transactions", error: error.message || error });
  }
});

module.exports = router;
