import express from 'express'
import { settings } from '../..';

const router = express.Router()

router.get('/', async (req, res) => {
    const currentSettings = await settings.get();
    res.json(currentSettings);
})

export default router