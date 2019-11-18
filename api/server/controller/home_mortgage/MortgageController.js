import { paymentCalculator } from './LoanCalculator'
import db from '../../../db/index'
import Util from '../../utils/utils';

const util = new Util;

class MortgageController {
    static async getMortgageCalculation(req, res) {
        const mortgageDetails = req.headers;
        try {
            const { property_value, down_payment, interest_rate, loan_term } = mortgageDetails
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

    static async saveMortgageCalculation(req, res) {
        const { property_name, property_value, down_payment, interest_rate, loan_term, monthly_payment } = req.body

        if (!property_value || !down_payment || !interest_rate || !loan_term || !monthly_payment) {
            util.setError(500, `Please provide property_value (number), down_payment (number), interest_rate (decimal) and loan_term (years), monthly payments (decimal)`);
            return util.send(res)
        } else {
            db.query('INSERT INTO mortgage (property_name, property_value, down_payment, interest_rate, loan_term, monthly_payment) VALUES ($1, $2, $3, $4, $5, $6)',
                [property_name, property_value, down_payment, interest_rate, loan_term, monthly_payment], (error) => {
                    if (error) {
                        util.setError(500, `Error saving property: ${property_name}`)
                    } else {
                        res.status(201).send(`Property saved for: ${property_name}`)
                    }
                })
        }
    }

    static async getAllMortgageCalculations(req, res) {
        db.query('SELECT * FROM mortgage ORDER BY id ASC', (error, results) => {
            if (error) {
                throw error
            }
            res.status(200).json(results.rows)
        })
    }

    static async getMortgageCalculationById(req, res) {
        const id = req.params.id
        if (!req.params.id) {
            util.setError(500, `Missing id params to get mortgage by Id`)
        } else {
            db.query('SELECT * FROM mortgage WHERE id = $1', [id], (error, results) => {
                if (error) {
                    throw error
                }
                res.status(200).json(results.rows)
            })
        }
    }
}
export default MortgageController;