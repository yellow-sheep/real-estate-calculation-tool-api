import { Router } from 'express';
import MortgageController from '../controller/home_mortgage/post/MortgageController';

const router = Router();

router.post('/calculate', MortgageController.calculateMortgage);

export default router;