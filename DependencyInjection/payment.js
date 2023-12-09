//example of dependency injection of payment calling a processor of 
class payment {
    pay(processor)
    {
        return processor.pay();
    }
    refund(processor)
    {
        return processor.refund();
    }
}
module.exports = payment;