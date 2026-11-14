const marvel_heroes=["thor","ironman","spiderman"];
const dc_heroes = ["superman","flash","batman"];

//marvel_heroes.push(dc_heroes);
//console.log(marvel_heroes[3][1]);

const allHeroes = marvel_heroes.concat(dc_heroes);
console.log(allHeroes);

const all_new_heroes = [...marvel_heroes,...dc_heroes];
console.log(all_new_heroes);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another_array=another_array.flat(Infinity);
console.log(real_another_array);


console.log(Array.isArray("ALekh"));
console.log(Array.from("Alekh"));
console.log(Array.isArray("Alekh"));

console.log(Array.from({name:"Alekh"})); // Interesting case for interviews
// It returns an empty array because it does not know whether to convert it in key values pairs or what


let score1 = 100;
let score2 = 200;
let score3 = 300;
const name = "Alekh";
console.log(Array.of(score1,score2,score3,name)); // Creates new arrays 