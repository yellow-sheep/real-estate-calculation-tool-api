import { Router } from 'express';
import MortgageController from '../controller/home_mortgage/MortgageController';

const router = Router();

router.get('/calculate', MortgageController.getMortgageCalculation);
router.post('/calculate', MortgageController.saveMortgageCalculation)

export default router;