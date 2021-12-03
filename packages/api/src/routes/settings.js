import express from 'express'
import { settings } from '@d2r/libs';
import preferenceStore from "@d2r/libs/dist/settings/preferences";
const PreferenceStore = preferenceStore.init({});

const router = express.Router()

router.get('/', async (req, res) => {
    const appSettings = PreferenceStore.get();
    res.json(appSettings);
})

export default router