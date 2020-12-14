//3 Ways To Create An Array
//Can Store strings, numbers, booleans, and other arrays(nested arrays)


//Array Literal [] (Stored in a variable) 
// var numbers= [3, 4, 5 ,2];
// console.log(numbers);

// //Creating an Array With The New JS Keyword
// var strings= new Array("lime", "lemon", "orange", "cherry");
// console.log(strings);

// //Creating an Array With The New JS keyword make the index
// var booleans= new Array()
// booleans[0]= 9<10;
// booleans[1]= 11===11.5;
// booleans[2]= 12>8;
// booleans[3]= "Kevin" == "KEvin";
// console.log(booleans);





// var classNames= new Array("Kevin", "April", "Marvin", "Syed", "Sheily", "Ngoc", "Abraham", "Destynee");
// console.log(classNames);
// // Use the Index Position
// console.log(classNames[3]);

// //.Length Method (Gives Index Of Our Array
// console.log(classNames.length);

// //Array Methods
// //Built-In Methods .methodname(data);
// //.push
// classNames.push("Mara");

// //.pop Removes an Index from the END of an Array
// classNames.pop();

// //.shift Method Removes an Index from the BEGINNING of an Array
// classNames.shift();

// //.unshift "Kevin" adds an Index to the BEGINNING of an Array
// classNames.unshift("Kevin");

// //.splice ADD/REMOVE an Index in the Array
// //Replace 1 Element at a certain Index
// //Read Backwards
// //(2)Index Number, (1)Change At Index, "Name" to add, 0= No One Removed
// classNames.splice(2, 1, "Eli");





// //Looping Over an Array
// //To See All the ITems In our Array// Iterations
// //"For" loop while loop forEach loop
// //3 things we need to loop through data
// //When to start, when to stop, and how to get to the next item

// //i= Index
// for (i=0; i<classNames.length; i++) {
//     console.log(classNames[i]);
// }

// //Finding an Index
// // Locate an Array Item
// //.indexOf()    *Only 1 Index Allowed*
// console.log(classNames.indexOf("Abraham"));


//Create an Array called "donuts" that list 7-10 different items
//1 Using a loop, iterate through this array and console.log all the donuts
let donuts= ['Glazed', 'Chocolate', 'Apple Fritter', 'Eclair', 'Cronut', 'Boston Cream', 'Maple Bar', 'Bear Claw'];

for (i=0; i<donuts.length; i++) {
    console.log(donuts[i],);
    
    }
    
//2 Write the command to remove the first donut fron the array
donuts.shift();
//3 Write the command to remove the last donuts from the array
donuts.pop();
//4 Write the command to add a new donut "lime zest" to the front of the array
donuts.unshift (0, 0, "Lime Zest");
//5 Write the command to add another donut "lemon pie" to the end of the array
donuts.splice(7, 0, "Lemon Pie");

//6 Use either the join() or toString() method to convert an array to a string.
donuts.join(",");

//7 Write the command to make a copy of the array using slice. The copy should NOT include two donuts.
donuts = donuts.slice(2);

//8 Write the command that gives the indexOf where "chocolate" is located.
// donuts.indexOf("Chocolate");
donuts.indexOf("Chocolate");

//9 Write the command that gives the indexOf where "glazed" is located (You may get a negative number).
donuts.indexOf("Glazed");

//10 **Using the splice command, remove one donut from the array and add another.
donuts.splice(6, 1, "Sprinkle");




console.log(donuts.join(","));
console.log(donuts.slice(2));
console.log(donuts.indexOf("Chocolate"));
console.log(donuts.splice(6, 1, "Sprinkle"));

//11 **Create a new variable called withSyed and set it equal to the people array concatenated with the string of "Bob".
let withSyed = donuts.concat("Bob");
console.log(donuts.concat("Bob"));


//12 **Create a function called getdonuts() that will display all the donuts in your array and display on your page.
function getdonuts() {
    document.getElementById("types").innerHTML = donuts;
    
}

getdonuts();

