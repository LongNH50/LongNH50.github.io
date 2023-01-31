class CheckingAccount extends Account{

    constructor(number,overdraftLimit){
        super(number);
        this.overdraftLimit = overdraftLimit;
    }

    getOverdraftLimit(){
        return this.overdraftLimit;
    }

    setOverdraftLimit(amount){
        this.overdraftLimit = amount;
    }

    withdraw(amount){
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > this.getBalance + this.overdraftLimit) {
            throw Error("Insufficient funds");
        }
        this._balance -= amount;
    }

    toString(){
        return super.toString + "overdraft limit= " +this.overdraftLimit;
    }
}