/*

Auftrag:
"Bestenfalls per SSO über die peemdomain"
-> per react sehr schwer @Paul und @David Kohlweg oder Paulus fragen ob das überhaupt geht

-> antwort: zu spät gefragt, hätte zu lange gedauert -> kann jonas beim praktikum maybe tryen

-_-

 */

// backend/src/mockdata/mockdata.ts

import bcrypt from 'bcryptjs';

export interface UserModel {
    id: number;
    username: string;
    password: string;
}

export const users: UserModel[] = [
    {
        id: 1,
        username: "admin",
        password: bcrypt.hashSync('admin1', 10)
    },
    {
        id: 2,
        username: "David",
        password: bcrypt.hashSync("mosdab20", 10)
    },
    {
        id: 3,
        username: "Andy",
        password: bcrypt.hashSync("weianb20", 10)
    },
    {
        id: 4,
        username: "Jonas",
        password: bcrypt.hashSync("brujob20", 10)
    },
    {
        id: 5,
        username: "Paul",
        password: bcrypt.hashSync("gigpab20", 10)
    }
];

export const findUserByUsername = (username: string): UserModel | undefined => {
    return users.find(user => user.username === username);
};
