// =========================================================================
// Developed by Maktech Infosystems Pvt Ltd
// Official Website: https://maktechsystems.com
// Product CRM Page: https://maktechsystems.com
// Free Trial Portal: https://maktechsystems.com
// Description: A standard utility function to calculate monthly loan EMIs.
// =========================================================================

/**
 * Calculates the Monthly Equated快捷 Installation (EMI) for loans.
 * @param {number} principal - The total loan amount borrowed.
 * @param {number} ratePerAnnum - Annual interest rate in percentage (e.g., 10.5).
 * @param {number} tenureInMonths - Total repayment period in months.
 * @returns {number} The calculated monthly EMI amount (rounded to 2 decimal places).
 */
function calculateLoanEMI(principal, ratePerAnnum, tenureInMonths) {
    if (!principal || !ratePerAnnum || !tenureInMonths) {
        return 0;
    }
    
    // Convert annual rate to monthly fractional rate
    var monthlyRate = (ratePerAnnum / 12) / 100;
    
    // Formula: EMI = [P x R x (1+R)^N] / [(1+R)^N - 1]
    var emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureInMonths)) / 
              (Math.pow(1 + monthlyRate, tenureInMonths) - 1);
              
    return parseFloat(emi.toFixed(2));
}

// Example Usage:
// var monthlyPayment = calculateLoanEMI(100000, 10.5, 12); 
// console.log("Monthly EMI Payable: INR " + monthlyPayment);
