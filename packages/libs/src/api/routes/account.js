import express from 'express'
import { account } from '../../settings';

const router = express.Router()

router.get('/', async (req, res) => {
  const accountData = await account.list();
  res.json(accountData);
});


export default router;