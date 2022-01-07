"use strict";
/*
Calculate compounded interest for a period.
*/
let profitRatePerMonth; // It is a monthly profit rate
let investmentAmount; // Investment amount
let profitAmount; // Amount of profit calculated 
let futureValue; // Amount after adding profit
let periodInYears; // Investment period
let numberOfMonths; // total number of months in the period
let currentMonthProfit; // Profit amount for current month
let currentDetails = ''; //Variable for string representation in console
let currentMonthProfitString = ''; //Variable for string representation in console
let futureValueString = '';
let a;
//Set values for initial 
periodInYears = 10;
investmentAmount = 1000000;
profitRatePerMonth = 10 / 12; //Profit rate taken annual and then divided into months.
futureValue = investmentAmount;
numberOfMonths = periodInYears * 12;
for (let currentMonth = 1; currentMonth <= numberOfMonths; currentMonth++) {
    currentMonthProfit = (futureValue * profitRatePerMonth) / 100; //Calculated the profit
    futureValue += currentMonthProfit; // Added the profit to future value
    //create a console message
    currentMonthProfit = Number.parseFloat(currentMonthProfit.toFixed(2));
    futureValue = Number.parseFloat(futureValue.toFixed(2));
    currentMonthProfitString = '$' + currentMonthProfit.toLocaleString();
    futureValueString = '$' + futureValue.toLocaleString();
    currentDetails = `Month = ${currentMonth}, Profit = ${currentMonthProfitString}, Future Value = ${futureValueString}`;
    //show message in console
    console.log(currentDetails);
}
