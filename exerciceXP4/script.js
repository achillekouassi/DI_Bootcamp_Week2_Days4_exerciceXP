const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
/* Let's console.log the stock and prices in order to show the changing to the following codes*/ 
console.log(stock);
console.log(prices)

/* 
Create an array called shoppingList with the following items: “banana”,
 “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.
 Create a function called myBill() that takes no parameters.
 The function should return the total price of your shoppingList. In order to do this you must follow these rules:
The item must be in stock. (Hint : check out if .. in)
If the item is in stock find out the price in the prices object.
Call the myBill() function.
  */

 var shoppingList=["banana","orange","apple"]
function myBill(){
    var totalPrice=0; // Initializing the price to 0
    var productInStock=[] // This array will collect the item which are in the stock
   for (choice in shoppingList){ // Loop for items in shoppinglist
       for (let [product,number] of Object.entries(stock)){ // Loop for all products
           if (shoppingList[choice]===product && number!=0){ // A condition for checking if the shopping item is in the stock
              for ([corresondingProduct,price] of Object.entries(prices)){ // loop for all the prices
                  if (shoppingList[choice]===corresondingProduct){// Condition  for corresponding the item in stock to its price
                     productInStock.push(shoppingList[choice]) // Adding the item which is in the stock to collecting array
                      totalPrice+=price; // Addition of prices
                      stock[product]-=1; // this variable will decrease the item's stock by 1
                  }
                } 
           }
           if (shoppingList[choice]===product && number===0){ // Condition for displaying items which are not in stock
               console.log(`${shoppingList[choice]} is not in the stock`) 
            }
        }
    }
    console.log(`The shopping list's items in the stock are: ${productInStock.join(" and ")}`); // Displaying item in stock
    console.log(`Total price is ${totalPrice}`); // Displaying the total price of items in stock
    console.log(stock) // we console.log the stock again to display it so that we will see the changing now.
}

myBill()
