// MY THOUGHT PROCESSES

let reaction = 'yikes';
//declare the variable as let reaction = 'yikes'. 
reaction[0] = 'l';
//Overwrite the zeroth value of the reaction variable as the letter 'l' instead of the letter 'y'.

console.log(reaction);
//Logging the reaction variable will output 'likes' because the zeroth. 

/* WRONG!

I was wrong because although it is a variable, 
it's an immutable primitive value, 
so it doesn't have properties like an array, 
although you can call a letter from primitive value like an array. 
You can't change or overwrite the values of a primitive time because it's read-only. 
*/

let pet = 'Narwhal';
// pet is a primitive value, so it is immutable. 

pet = 'The Kraken';
// despite attempting to change this value, then it will not change anything.

console.log(pet);
// The log is 'Narwhal' because the value is unchanged.

/* Wrong. 

pet logs as 'The Kraken'. Let is a variable that through it's a primitive type, it can be overwritten if the entire value is changed. 
*/

'war' = 'peace';
// VM117300:10 Uncaught SyntaxError: Invalid left-hand side in assignment
war = {};
// outputs {}
war.peace = "peace";
// "peace"
console.log(war);
// {peace: "peace"}
console.log(war.peace)
// "peace"
war.peace = true;
console.log(war.peace)
// true
console.log(war);
// {peace: true}

let count = 101;
pet = count + ' Dalmatians';
console.log(pet);
// "101 Dalmatians"

// Literals - An expression where we literally write down their value.