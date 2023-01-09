/*Define a function called hotelCost().
It should ask the user for the number of nights they would like to stay in the hotel.
If the user doesn’t answer or if the answer is not a number, ask again.
The hotel costs $140 per night. The function should return the total price of the hotel.*/

function hotelCost(){
    var numberOfNight=prompt("Enter the number of night you will do");
    var convertNumber=Number(numberOfNight); // Convert the type of input to number
    while(isNaN(convertNumber) || numberOfNight.length===0){
        alert("Please a number is asked");
        numberOfNight=prompt("Enter the number of night you will do");
        convertNumber=Number(numberOfNight);
    }
    return convertNumber*140

}


/*
Define a function called planeRideCost().
It should ask the user for their destination.
If the user doesn’t answer or if the answer is not a string, ask again.
The function should return a different price depending on the location.
“London”: 183$
“Paris” : 220$
All other destination : 300$
 */
function planeRideCost(){
    var destination=prompt("Enter your destination here")
    var price=0;
    while(destination.length===0){ // we will just care of empty case because the prompt's type is always a string
        alert("The space must not be empty")
        destination=prompt("Enter your destination here") 
        
    }
    if (destination==="London"){
        price+=183;
    }
    else if (destination==="Paris"){
        price+=220;
    }
    else{
        price+=300;
    }
    return price
}




/*
Define a function called rentalCarCost().
It should ask the user for the number of days they would like to rent the car.
If the user doesn’t answer or if the answer is not a number, ask again.
Calculate the cost to rent the car. The car costs $40 everyday.
If the user rents a car for more than 10 days, they get a 5% discount.
The function should return the total price of the car rental.
*/

function rentalCarCost(){
    var numberOfDay=prompt("Enter the number of day you would like to rent the car");
    var convertDaysNumber=Number(numberOfDay);
    while (isNaN(convertDaysNumber) || numberOfDay.length===0){
        alert("The space must not be empty")
        numberOfday=prompt("Enter the number of day you would like to rent the car");
        convertDaysNumber=Number(numberOfDay); 
    }
    carCost=convertDaysNumber*40
    if (numberOfDay>10){
        carCost-=(5*carCost)/100
    }
    return carCost
}


/*
Définissez une fonction appelée totalVacationCost()qui renvoie le coût total des vacances 
de l'utilisateur en appelant les 3 fonctions que vous avez créées ci-dessus.
Exemple : La voiture coûte : $x, l'hôtel coûte : $y, les billets d'avion coûtent : $z.
Astuce : Vous devez appeler les fonctions hotelCost(), planeRideCost()et rentalCarCost()
à l'intérieur de la fonction totalVacationCost().

*/

function totalVacationCost(){
    var hotel_Cost=hotelCost();
    var ride_Cost=planeRideCost();
    var car_Cost=rentalCarCost();
    vacation_Cost=hotel_Cost+ride_Cost+car_Cost;
    return vacation_Cost;
}

console.log(`Total Vacation cost is ${totalVacationCost()}$`)