"use strict";
let accountHolderName; // Name of the account holder
let accountNumber; // Account number
let amountInAccount; //Amount in account
let monthlyProfitRate; //Profit rate for a month
let quarterlyProfitRate; //Profit rate for a 3 months
let semiAnnualProfitRate; //Profit rate for six months
let annualProfitRate; //Profit rate for 12 months
let amountOfProfit; //Calculated Profit
let totalAmountWithProfit; // Calculated total amount in account with profit
let amountDetails;
//Setting account details
accountNumber = "SMB0001";
accountHolderName = "Alfred";
amountInAccount = 1000000;
//Setting profit rates
monthlyProfitRate = 4;
quarterlyProfitRate = 6;
semiAnnualProfitRate = 8;
annualProfitRate = 10;
//calculate monthly profit
amountOfProfit = (amountInAccount * monthlyProfitRate) / 100;
totalAmountWithProfit = amountInAccount + amountOfProfit;
//Message preparation for console
amountDetails = `${accountHolderName} gets ${amountOfProfit} with the rate of 
    ${monthlyProfitRate}% for first month. And total amount 
    in bank becomes ${totalAmountWithProfit}.`;
console.log(amountDetails);
//calculate quarterly profit
amountOfProfit = (amountInAccount * quarterlyProfitRate) / 100;
totalAmountWithProfit = amountInAccount + amountOfProfit;
//Message preparation for console
amountDetails = `${accountHolderName} gets ${amountOfProfit} with the rate of 
    ${quarterlyProfitRate}% for first quarter. And total amount 
    in bank becomes ${totalAmountWithProfit}.`;
console.log(amountDetails);
//calculate semi annual profit
amountOfProfit = (amountInAccount * semiAnnualProfitRate) / 100;
totalAmountWithProfit = amountInAccount + amountOfProfit;
//Message preparation for console
amountDetails = `${accountHolderName} gets ${amountOfProfit} with the rate of 
    ${semiAnnualProfitRate}% for first semester. And total amount 
    in bank becomes ${totalAmountWithProfit}.`;
console.log(amountDetails);
//calculate annual profit
amountOfProfit = (amountInAccount * annualProfitRate) / 100;
totalAmountWithProfit = amountInAccount + amountOfProfit;
//Message preparation for console
amountDetails = `${accountHolderName} gets ${amountOfProfit} with the rate of 
    ${annualProfitRate}% for first year. And total amount 
    in bank becomes ${totalAmountWithProfit}.`;
console.log(amountDetails);
