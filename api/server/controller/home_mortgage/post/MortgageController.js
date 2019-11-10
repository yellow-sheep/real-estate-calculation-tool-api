import { paymentCalculator } from './LoanCalculator'
import Util from '../../../utils/utils';

const util = new Util;

class MortgageController {
    static async calculateMortgage(req, res) {
        const mortgageDetails = req.body;
        try {
            const { property_value, down_payment, interest_rate, loan_term } = mortgageDetails
            console.log(interest_rate)
            if (!property_value || !down_payment || !interest_rate || !loan_term) {
                util.setError(500, `Please provide property_value (number), down_payment (number), interest_rate (decimal) and loan_term (years)`);
            } else {
                const amount = property_value - down_payment
                const monthlyPayment = paymentCalculator(amount, interest_rate, loan_term);
                util.setSuccess(200, `calculated monthly payment`, monthlyPayment);
            }
            return util.send(res);
        } catch (error) {
            util.setError(404, error);
            return util.send(res);
        }
    }
}
export default MortgageController;