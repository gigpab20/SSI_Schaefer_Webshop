import * as express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Index route');
});

export default router;
