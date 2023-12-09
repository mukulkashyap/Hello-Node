const Payment = require("./payment");
const sbi = require("./sbi");
console.log("Welcome Mukul");
const payment = new Payment();
payment.pay(new sbi(2000, 1234));