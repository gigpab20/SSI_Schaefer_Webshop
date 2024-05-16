"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const util_service_db_1 = require("../src/db/util.service.db");
let router = express_1.default.Router();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, util_service_db_1.getAll)();
    res.json(result);
}));
router.get("/:price", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const priceParam = parseInt(req.params.price);
    console.log("::::::::::::::: in express route :::::::::::::::");
    console.log(priceParam);
    const dbResponse = yield (0, util_service_db_1.getAllInPrice)(priceParam);
    console.log(dbResponse);
    res.json(dbResponse);
}));
router.patch("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const item = req.body.item;
    console.log("::::::::::::::::in Patch in products.ts::::::::::::::::");
    console.log(item);
    yield (0, util_service_db_1.updateProduct)(item);
    //TODO: make the post and verify that the item is the actual param
}));
module.exports = router;
