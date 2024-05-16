import express, {Router, Request, Response, NextFunction} from "express";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { findUserByUsername } from "../src/mockdata/mockdata";
let router = express.Router();

const JWT_SECRET = 'your_jwt_secret_key';  // In einer echten Anwendung sollte dies sicherer sein

router.post('/login', async (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;

    const user = findUserByUsername(username);
    if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }

    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
});

router.get('/profile', (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ message: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];
    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Failed to authenticate token' });
        }
        res.json({ user });
    });
});


module.exports = router;