// Loops.js

console.log("6a. While loop prints even numbers from 0-100");
let i=0;

while (i <=100){
	console.log(i);
	i +=2;
}

console.log("6b. While loop prints every 3rd number going backward from 100 to 0");

let n = 100;

while (n >= 0){
	console.log(n);
	n -= 3;
}


console.log("6c. A for loops that prints every other number from 1 to 100");

 for(i = 1; i <=100; i+=2){
	console.log(i);
}


console.log("6d. A for loop from 0 to 100, except Hello at nums divisible by 3, World at nums divisible by 5, and HelloWorld and nums divisible by 3 and 5.");

for (i = 0; i <= 100; i++){
	if ((i % 3 == 0) && (i % 5 ==0)){
		console.log('HelloWorld');
	}
	else if (i % 3 == 0){
		console.log('Hello');
	}
	else if (i % 5 == 0){
		console.log('World');
	}
	else {
		console.log(i);
	}

}
