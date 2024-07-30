/*

Auftrag:
"Bestenfalls per SSO über die peemdomain"
-> per react sehr schwer @Paul und @David Kohlweg oder Paulus fragen ob das überhaupt geht

-> antwort: zu spät gefragt, hätte zu lange gedauert -> kann jonas beim praktikum maybe tryen

-_-

 */


// backend/src/routes/user.ts

import express, { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { findUserByUsername } from '../mockdata/mockdata';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

router.post('/login', (req: Request, res: Response) => {
    const { username, password } = req.body;
    const user = findUserByUsername(username);
    if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
});

export default router;

