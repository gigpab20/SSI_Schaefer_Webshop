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
exports.getAll = exports.connectDB = void 0;
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
    const result = yield connection.execute('SELECT * ' +
        'FROM mosdab20.artikeltable');
    connection.close();
    console.log(result.rows);
    const result2 = JSON.stringify(result.rows);
    const hardwareData = (_a = result.rows) === null || _a === void 0 ? void 0 : _a.map((row) => {
        return {
            ID: row[0],
            ARTIKEL: row[1],
            BEZEICH: row[2],
            MEMO_KAUFT: row[3],
            SERIENNR: row[4],
            ANLAGENNR: row[5],
            WE_DATUM: row[6]
        };
    });
    return hardwareData;
});
exports.getAll = getAll;
