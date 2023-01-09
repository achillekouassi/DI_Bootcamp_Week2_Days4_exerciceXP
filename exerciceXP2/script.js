/*
John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

Create a function named calculateTip() that takes no parameter.

Inside the function, use prompt to ask John for the amount of the bill.

Here are the rules
If the bill is less than $50, tip 20%.
If the bill is between $50 and $200, tip 15%.
If the bill is more than $200, tip 10%.

Console.log the tip amount and the final bill (bill + tip).

Call the calculateTip() function.
 */

 function calculateTip(){
     var billsAmount=prompt("Please enter the amount here:");
     var convertAmount=Number(billsAmount);

     // A will loop to push the user to enter only numbers
     while (isNaN(convertAmount)){
         alert("Enter a corresponding amount");
         billsAmount=prompt("Please enter the amount here:");
         convertAmount=Number(billsAmount);
     }
     var tipAmount=0;
     if (convertAmount<50){
         tipAmount=(20*convertAmount)/100;
     }else if(convertAmount>=50 && convertAmount<=200){
         tipAmount=(15*convertAmount)/100;
     }else{
         tipAmount=(10*convertAmount)/100;
     }
    
    var finalBill=tipAmount + convertAmount // addition of tipAmount and billsAmount converted to a Number
    console.log(`the tip's amount is ${tipAmount}$ and the final bill is ${finalBill}$`)
 }
 calculateTip();