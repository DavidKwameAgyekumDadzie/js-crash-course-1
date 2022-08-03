// Declaring a variable
// keyword identifier/VariableName = value
var firstName = "David";
let lastName = "Dadzie";
let age = 27;
let isMarried = true;
let children = ["Bright", "Simon", "Patrick"];
let other = {
    favoriteColor: "Gold",
    favoriteSport: "Soccer",
    favoriteFruit: "Apple",
}
const fullName = firstName + " " +lastName; //concartenation
//console.log(fullName);
const mySelf = `My name is ${firstName} ${lastName}`;//string
console.log(mySelf);

//string
let sentence = "This is a story about John Doe in Blind Spot"
console.log(sentence.length);
console.log(sentence.split("John"))
//let email = "david@gmail.com";
//console.log(email.split("John"))
console.log(sentence.replace("John", "Patrick"))
console.log(sentence.toLowerCase());
console.log(sentence.toUpperCase());
console.log(sentence.startsWith("T"));
console.log(sentence.endsWith("Spot"));
console.log(sentence.includes("out"));

//ARRAY
//const days = ["Monday", "Tuesday", "Wednesday", "Thursday"];
let days = ["Monday", "Tuesday", "Wednesday", "Thursday"];
console.log(days.length);
//days = days.push("Friday");//the push returns the lenght to you. IF YOU DON'T want the number but the arrayitself, then use  immediate below
days.push("Friday")
console.log(days);
console.log(days.pop());
days.unshift("Sunday");//shift add it on the front but push add it at the back
console.log(days);
console.log(days.shift())
console.log(days.indexOf("Friday"));
console.log(days[2]);//for retrieving data
days[0] = "Sunday"; //change data in the array
console.log(days);

//OBJECT
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 27,
};
console.log(person["firstName"]);
console.log(person.firstName);
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));
console.log(Object.length);



