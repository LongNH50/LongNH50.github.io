class SavingsAccount extends Account {
    constructor(number, interest) {
        super(number);
        this.interest = interest;
    }

    getInterest() {
        return this.interest;
    }

    setInterest(interest) {
        this.interest = interest;
    }

    addInterest() {
        this.interest = this.getBalance * this.interest / 100;
    }

    toString() {
        return super.toString + "interest= " + this.interest;
    }

}