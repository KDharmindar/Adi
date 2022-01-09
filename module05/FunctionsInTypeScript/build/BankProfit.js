"use strict";
//Type of profit that we have to choose
var ProfitType;
(function (ProfitType) {
    ProfitType["Monthly"] = "Month";
    ProfitType["Quarterly"] = "Quarter";
    ProfitType["SemiAnnually"] = "Semester";
    ProfitType["Yearly"] = "Annuall";
})(ProfitType || (ProfitType = {}));
function CalculateBankProfit(accountNumber, accountHolderName, amountInAccount, profitType) {
    let profitRate = 0; //Single variable for Profit rate of all types
    let amountOfProfit; //Calculated Profit
    let totalAmountWithProfit; // Calculated total amount in account with profit
    let amountDetails;
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
}
let accountHolderName = []; // Name of the account holder
let accountNumber = []; // Account number
let amountInAccount = []; //Amount in account
let profitType = [];
//Setting account details
accountNumber[0] = "SMB0001";
accountHolderName[0] = "Alfred";
amountInAccount[0] = 1000000;
profitType[0] = ProfitType.Yearly; //Chosen monthly profit
//Setting account details
accountNumber[1] = "SMB0002";
accountHolderName[1] = "Alex";
amountInAccount[1] = 2000000;
profitType[1] = ProfitType.Monthly; //Chosen monthly profit
//Setting account details
accountNumber[2] = "SMB0003";
accountHolderName[2] = "Allen";
amountInAccount[2] = 3000000;
profitType[2] = ProfitType.Quarterly; //Chosen monthly profit
//Setting account details
accountNumber[3] = "SMB0004";
accountHolderName[3] = "Chris";
amountInAccount[3] = 4000000;
profitType[3] = ProfitType.SemiAnnually; //Chosen monthly profit
for (let index = 0; index < accountNumber.length; index++) {
    CalculateBankProfit(accountNumber[index], accountHolderName[index], amountInAccount[index], profitType[index]);
}
