import express from 'express'
import { settings } from '@d2r/libs';

const router = express.Router()

router.get('/', async (req, res) => {
    const currentSettings = await settings.get();
    res.json(currentSettings);
})

export default router