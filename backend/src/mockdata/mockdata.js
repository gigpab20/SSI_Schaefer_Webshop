"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUserByUsername = exports.users = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
exports.users = [
    {
        id: 1,
        username: "admin",
        password: bcryptjs_1.default.hashSync('admin1', 10)
    },
    {
        id: 2,
        username: "David",
        password: bcryptjs_1.default.hashSync("mosdab20", 10)
    },
    {
        id: 3,
        username: "Andy",
        password: bcryptjs_1.default.hashSync("weianb20", 10)
    },
    {
        id: 4,
        username: "Jonas",
        password: bcryptjs_1.default.hashSync("brujob20", 10)
    },
    {
        id: 5,
        username: "Paul",
        password: bcryptjs_1.default.hashSync("gigpab20", 10)
    }
];
const findUserByUsername = (username) => {
    return exports.users.find(user => user.username === username);
};
exports.findUserByUsername = findUserByUsername;
