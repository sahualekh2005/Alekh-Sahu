//const tinderUser = new Object(); //Singleton object
const tinderUser ={}; //Non-singleton 

tinderUser.id="123abc";
tinderUser.name ="sunny";
tinderUser.isLoggedIn = false;
//console.log(tinderUser);
const regularUser={
    email:"some@gmail.com",
    fullName:{
        userFullName:{
            firstName:"alekh",
            lastName:"sahu"
        }
    }
}
//console.log(regularUser.fullName.userFullName);

//OBJECT MERGING

const obj1 = {1:"a",2:"b"};
const obj2 = {3:"c",4:"d"};
//const obj3 = {obj1,obj2};
//const obj3 = Object.assign({},obj1,obj2);
const obj3 = {...obj1,...obj2};
//console.log(obj3);

const users={
    id:1,
    email:"ah@gmail.com"
}
//console.log(users.hasOwnProperty('email'));

const course={
    courseName:"js in hindi",
    price:555,
    courseInstructor:"alekh"
}
const {courseInstructor:instructor} = course;
console.log(instructor);


