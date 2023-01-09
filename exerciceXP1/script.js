/*Create a function called infoAboutMe() that takes no parameter.
The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
Call the function. */

function infoAboutMe(){
    var myInfo={
        name:"Diarrassouba Vazoumana",
        age:27,
        hobbies:["Football","Reflection's games","Music"]
    }
    
    console.log(`My name is ${myInfo.name}, i am ${myInfo.age} years old. I like playing ${myInfo.hobbies[0]},listening to the ${myInfo.hobbies[2]},i play games like ${myInfo.hobbies[1]}`);
}

infoAboutMe();

/*
Part II : function with three parameters

Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
Call the function twice with the following arguments:
infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")
*/ 

function infoAboutPerson(name,age,color){
    console.log(`My name is ${name}, I am ${age} years old, my favorite color is ${color}`)
}

infoAboutPerson("David",45,"blue");
infoAboutPerson("Josh",12,"yellow");
