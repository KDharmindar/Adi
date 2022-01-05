"use strict";
//Type of profit that we have to choose
var ProfitType;
(function (ProfitType) {
    ProfitType["Monthly"] = "Month";
    ProfitType["Quarterly"] = "Quarter";
    ProfitType["SemiAnnually"] = "Semester";
    ProfitType["Yearly"] = "Annuall";
})(ProfitType || (ProfitType = {}));
let accountHolderName; // Name of the account holder
let accountNumber; // Account number
let amountInAccount; //Amount in account
let profitRate = 0; //Single variable for Profit rate of all types
let amountOfProfit; //Calculated Profit
let totalAmountWithProfit; // Calculated total amount in account with profit
let amountDetails;
let profitType;
//Setting account details
accountNumber = "SMB0001";
accountHolderName = "Alfred";
amountInAccount = 1000000;
profitType = ProfitType.Yearly; //Chosen monthly profit
//select the profit rate
switch (profitType) {
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
