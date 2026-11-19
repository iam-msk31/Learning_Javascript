const name = "Rohan";
const count = 50 ;

// console.log(name + count + "Value");

console.log(`Hello my name is ${name} and my repo count is ${count}`);

const gameName = new String("Rohanp-rc-com")

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLocaleUpperCase());
console.log(gameName.indexOf('r'));
console.log(gameName.charAt (4));


const newString = gameName.substring(0, 5);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringone = "   Rohan  ";
console.log(newStringone);
console.log(newStringone.trim());

const url = "https://Rohan.com/rohan%20chaudhary";
console.log(url.replace("%20" , "-"))



console.log(gameName.split('-'));
