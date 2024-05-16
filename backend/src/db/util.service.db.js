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
exports.updateProduct = exports.getAllInPrice = exports.getAll = exports.connectDB = void 0;
const oracledb_1 = __importDefault(require("oracledb"));
const dbConfig = {
    user: 'mosdab20',
    password: 'mosdab20',
    connectString: 'db3.htl-kaindorf.at:1521/SCHUELER_PDB'
};
let connection;
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    yield oracledb_1.default.createPool(dbConfig);
    console.log("### successfully connected to Database");
});
exports.connectDB = connectDB;
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    connection = yield oracledb_1.default.getConnection();
    const result = yield connection.execute('SELECT * FROM ARTIKELTABLE ORDER BY PREIS ASC');
    connection.close();
    console.log(":::::::::::::::::: in mossb getAll !!::::::::::::::::::");
    console.log(result.rows);
    const result2 = JSON.stringify(result.rows);
    const hardwareData = (_a = result.rows) === null || _a === void 0 ? void 0 : _a.map((row) => {
        //console.log(row[5]);
        return {
            ARTIKELNR: row[0],
            BEZEICH: row[1],
            BESCHREIBUNG: row[2],
            SERIENNR: row[3],
            ANLAGENNR: row[4],
            WE_DATUM: row[5],
            PREIS: row[6],
            KOMMENTAR: row[7],
            RESERVIERT: row[8]
        };
    });
    return hardwareData;
});
exports.getAll = getAll;
const getAllInPrice = (price) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    connection = yield oracledb_1.default.getConnection();
    const dbResponse = yield connection.execute("SELECT * FROM ARTIKELTABLE WHERE PREIS < " + price + " ORDER BY PREIS ASC"
    /*"SELECT      ARTIKELNR, BEZEICH, SERIENNR, ANLAGENNR, WE_DATUM, PREIS\n" +
        "FROM        ARTIKELTABLE\n" +
        "WHERE       PREIS < " + price + " \n" +
        "ORDER BY    PREIS ASC"*/
    );
    connection.close();
    console.log("::::::::::::::: in util service :::::::::::::::");
    //console.log(dbResponse.rows);
    const editRes = JSON.stringify(dbResponse.rows);
    //idk whats wrong tbh but it works and i dont have any nerves anymore to fix it
    //TODO: fix this prob (no prio)
    const products = (_b = dbResponse.rows) === null || _b === void 0 ? void 0 : _b.map((row) => {
        return {
            ARTIKELNR: row[0],
            BEZEICH: row[1],
            BESCHREIBUNG: row[2],
            SERIENNR: row[3],
            ANLAGENNR: row[4],
            WE_DATUM: row[5],
            PREIS: row[6],
            KOMMENTAR: row[7],
            RESERVIERT: row[8]
            /*ID: row[0],
            BEZEICH: row[1],
            SERIENNR: row[2],
            ANLAGENNR: row[3],
            WE_DATUM: row[4],
            PREIS: row[5]*/
        };
    });
    return products;
});
exports.getAllInPrice = getAllInPrice;
function updateProduct(item) {
    return __awaiter(this, void 0, void 0, function* () {
        connection = yield oracledb_1.default.getConnection();
        const res = yield connection.execute("UPDATE ARTIKELTABLE " +
            "SET BEZEICH = '" + item.BEZEICH + "'," +
            "BESCHREIBUNG = '" + item.BESCHREIBUNG + "'," +
            "SERIENNR = '" + item.SERIENNR + "'," +
            "WE_DATUM = TO_DATE('" + item.WE_DATUM + "', 'dd.MM.yyyy')," +
            "KOMMENTAR = '" + item.KOMMENTAR + "'," +
            "RESERVIERT = 1 " +
            "WHERE ARTIKELNR = '" + item.ARTIKELNR + "';");
        console.log("::::::::::::::: in util service (updateProduct) :::::::::::::::");
        connection.close();
    });
}
exports.updateProduct = updateProduct;
