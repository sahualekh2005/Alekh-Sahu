//Singleton
//Objects literals

const mySym = Symbol("key1");

const JsUser={
    name:"Alekh",
    age:20,
    [mySym]:"mykey1",//Symbol creation asked in interview
    branch:"CSE",
    year:3,
    lastLoginDays:["Monday","Saturday"]
};

//console.log(JsUser);
console.log(JsUser[mySym]);

JsUser.age = 50;
//Object.freeze(JsUser);
JsUser.age =98;
console.log(JsUser);

//Methods
JsUser.greetings = function(){
    console.log("Hello everyone!");
}
JsUser.greetings2 = function(){
    console.log(`Hello JS User,${this.name}`);
}
console.log(JsUser.greetings());
console.log(JsUser.greetings2());
console.log(Object.keys(JsUser));