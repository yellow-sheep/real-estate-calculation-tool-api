import { Router } from 'express';
import MortgageController from '../controller/home_mortgage/post/MortgageController';

const router = Router();

router.get('/calculate', MortgageController.getMortgageCalculation);

export default router;