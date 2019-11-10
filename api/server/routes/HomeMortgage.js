import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => res.status(200).send({
    message: 'temp page',
  }));

export default router;