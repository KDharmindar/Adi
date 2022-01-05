//Type of profit that we have to choose
enum ProfitType {
    Monthly = "Month",
    Quarterly = "Quarter",
    SemiAnnually = "Semester", 
    Yearly = "Annuall"
}

let accountHolderName:string; // Name of the account holder
let accountNumber:string; // Account number
let amountInAccount:number; //Amount in account
let profitRate:number = 0; //Single variable for Profit rate of all types
let amountOfProfit:number; //Calculated Profit
let totalAmountWithProfit:number; // Calculated total amount in account with profit
let amountDetails:string;
let profitType:ProfitType;

//Setting account details
accountNumber = "SMB0001";
accountHolderName = "Alfred";
amountInAccount = 1_000_000;
profitType = ProfitType.Yearly; //Chosen monthly profit

//select the profit rate
switch (profitType as ProfitType) {
    case ProfitType.Monthly:
        profitRate = 4;
        break;
    case ProfitType.Quarterly:
        profitRate = 6;
        break;
    case ProfitType.SemiAnnually:
        profitRate = 8;
        break;
    case ProfitType.Yearly:    
        profitRate = 10;
        break;
    default:
        break;
}

amountOfProfit = (amountInAccount * profitRate) / 100;
totalAmountWithProfit = amountInAccount + amountOfProfit;

//Message preparation for console
amountDetails = `${accountHolderName} gets ${amountOfProfit} with the rate of 
    ${profitRate}% for first ${profitType}. And total amount 
    in bank becomes ${totalAmountWithProfit}.`;

console.log(amountDetails);

