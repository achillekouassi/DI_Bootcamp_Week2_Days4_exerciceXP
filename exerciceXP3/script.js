/* Create a function call isDivisible() that takes no parameter.

In the function, loop through numbers 0 to 500.

Console.log all the numbers divisible by 23.

At the end, console.log the sum of all numbers that are divisible by 23.*/

function isDivisible(){
    var multiple23=[]
    var sum=0
    for (i=0;i<=500;i++){
        if (i % 23 ===0){
          multiple23.push(i);
          sum+=i;
          
        }
    }
    console.log(`Outcome: ${multiple23.join(" ")}`);
    console.log(`Sum: ${sum}`);
    
}
isDivisible();

// Bonus: Add a parameter divisor to the function.

// we will create a function called "isDivisibles" with a parameter

function isDivisibles(divisor){
    var multiple=[]
    var sum=0
    for (i=0;i<=500;i++){
        if (i % divisor ===0){
          multiple.push(i);
          sum+=i;
          
        }
    }
    console.log(`Outcome: ${multiple.join(" ")}`);
    console.log(`Sum: ${sum}`);
}
isDivisibles(11); // First test with the function
isDivisibles(25); // Second test with the function