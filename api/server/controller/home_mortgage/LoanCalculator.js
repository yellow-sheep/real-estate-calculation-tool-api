// calculate the raw monthly payment
// pass the total amount of the loan, the APR, and the length of the loan in months
const paymentCalc = function (loanAmt, loanRate, loanTerm) {
    const monthlyRate = (loanRate / 100) / 12;
    const payments = 12 * loanTerm;

    const x = Math.pow(1 + monthlyRate, payments);
    const monthly = (loanAmt * x * monthlyRate) / (x - 1);
    return { monthly_payment: roundNum(monthly) };
};

// round numbers to two decimal places
const roundNum = function (num) {
    return Math.round(num * 100) / 100;
};

// pass the amount of the loan, percentage rate, and length of the loan in months
export function paymentCalculator(loan_amount, interest_rate, loan_term) {
    return paymentCalc(parseFloat(loan_amount), parseFloat(interest_rate), parseFloat(loan_term));
};