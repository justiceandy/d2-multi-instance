import express from 'express'
import { d2process } from '@d2r/libs';

const router = express.Router();

router.get('/', async (req, res) => {
    const processes = await d2process.list();
    res.json(processes)
})

export default router