//strategy which will be used as interface which will act as processor
class Bank {
    constructor(amount,account)
    {
        this.amount = amount;
        this.account=account;
    }
    pay()
    {
        return this.processPayment();
    }
   
}
module.exports=Bank;