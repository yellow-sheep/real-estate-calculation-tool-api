import { Router } from 'express';
import MortgageController from '../controller/home_mortgage/MortgageController';

const router = Router();

router.get('/calculate', MortgageController.getMortgageCalculation);
router.get('/calculations', MortgageController.getAllMortgageCalculations)
router.get('/calculations/:id', MortgageController.getMortgageCalculationById)
router.post('/calculate', MortgageController.saveMortgageCalculation)

export default router;