class Bank{

    static nextNumber =0;
    constructor(){
        this.accounts =[];
    }

    addAccount = (number)=>{
        let acc = new Account(number);
        this.accounts.push(acc);
        return acc;
    }
    addSavingsAccount= (number,interest) =>{
        let savingAcc = new SavingsAccount(number,interest);
        this.accounts.push(savingAcc);
        return savingAcc;
    }

    addCheckingAccount = (number,overdraftLimit) =>{
        let checkingAcc = new CheckingAccount(number,overdraftLimit);
        this.accounts.push(checkingAcc);
        return checkingAcc;
    }

}