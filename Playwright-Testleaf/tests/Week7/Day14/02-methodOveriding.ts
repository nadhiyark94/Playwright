

class BaseBank{ // parent class

    interestRate(){
        console.log(`Interest rate is 5%`);
        
    }
}

class SBIBank extends BaseBank{

     interestRate(){
        console.log(`Interest rate is 5%`);
    }
}

const bankobj = new SBIBank();
bankobj.interestRate()