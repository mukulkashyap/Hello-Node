const Bank = require("../Bank");

class sbi extends Bank{
    processPayment()
    {
        console.log(`The amount of ${this.amount} is received`);
    }
}
module.exports = sbi;