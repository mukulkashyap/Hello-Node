const math = require("./math");
const sbi = require("./sbi");
const file = require("fs");
const Payment = require("./payment");
console.log("Welcome Mukul");
console.log(math.addFn(2,4));
//console.log(file.readFileSync("./readme.txt","utf-8"));
file.readFile("./readme.txt","utf8",(err,result)=>
{
    if(err)
    {

    }
    else 
    {
        console.log(result);
    }
})
const payment = new Payment();
payment.pay(new sbi(2000,1234));