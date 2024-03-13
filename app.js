console.log("hello!")
let a=2;
let b=3;
console.log("sum is:",a+b);
apple=10;
banana=20;
fruits=apple+banana;

output=(`total price: ${fruits} rupees.`)
console.log(output)
//operators

let x=10;
let y=20;
console.log(`sum is:${x+y}`)
console.log(++x);
console.log(x++);
x=y
console.log(x)
let age=14
console.log(age>18)
console.log(age<18)
console.log(age==18)
console.log(age!=18)
console.log("p">"b")
//conditional statements
//if statement
 
console.log("before my if statement")
 let ages=23;
 if (ages>=18){
    console.log("you can vote")
   console.log ("you can drive")
 }
 if (ages<18){
    console.log("you cannot vote")
    console.log("you cannot drive")
 }
 if (ages>20){
    console.log("you are in your 20s")
 }
console.log("after my if statement")
//practice 1
 
console.log("before my if statement")
let color="yellow";
 if (color=="red"){
    console.log("please stop!!")
 }
 if(color=="green"){
    console.log("you can go")
 }
 if(color=="yellow"){
    console.log("slow down")
 }
console.log("after my if statement")
// else if statements

 
let agee=14
if(agee>=18){
    console.log("you can vote")
}
else if(agee<18){
    console.log("you cannot vote")
}
//marks
marks=99
if (marks>=80){
    console.log("A+")
}
else if(marks>=60){
    console.log(A)
}
else if(marks>=33){
    console.log(B)
}
else if(marks<33){
    console.log("fail")
}
//else statements
let agess=24
if(agess>=18){
    console.log("you can vote")
}
else{
    console.log("you cannot vote")
}
//practice paper 2

let size ="m"
if(size=="xl"){
    console.log(250)
}
else if(size=="l"){
    console.log(200)
}
else if(size=="m"){
    console.log(100)
}
else if (size="s"){
    console.log(50)
}
//nested if-else

let score= 82;
if(score>=33){
    console.log("pass")
    if(score>=80){
        console.log("grade:A+")
    }
    else{
        console.log("grade:B+")
    }
}
else {
    console.log("better luck next time")
}
//logical operators &&
 let scoree=80;
 if(scoree>=33 && scoree>=80){
    console.log("pass")
    console.log("A+")
 }
 //logical ||
 let scores=56;
 if(scores>=33 || scores>=80){
    console.log("pass")
    console.log("A+")
 }
 //truthy and falsy

if(true){
    console.log("it has true value")
}
else{
    console.log("it has false value")
}
//switch staementt

let colors="green"
switch(colors){
    case "red":
    console.log("stop");
    break;
    case "green":
    console.log("go")
    break;
    case "yellow":
    console.log("slow down")
    break;
    default:
        console.log("broken light")

}


//practice questions

let days=6
switch(days){
    case(1):
    console.log("monday")
    break;
    case(2):
    console.log("tuesday")
    break;
    case(3):
    console.log("wednesday")
    break;
    case(4):
    console.log("thursday")
    break;
    case(5):
    console.log("friday")
    break;
    case(6):
    console.log("saturday")
    break;
    case(7):
    console.log("sunday")
    break;
}
//alert and prompts

// alert("something is wrong")
// alert("danger")
// console.error("this is an error")
// console.warn("its a warning")
// prompt("enter your name")
// let id= prompt("enter the id")
// console.log(id)
// let firstN=prompt("enter your first name")
// let lastN=prompt("enter your last name")
// console.log( "welcome", firstN ,lastN)

//assignment questions
//que 1
console.log("practice questions")
let num=90
if (num%10==0){
    console.log("good")
}
else{
    console.log("bad")
}

//ques 2
// let username=prompt("enter username")
// let userage=prompt("enter user age")
// alert(` ${username} is ${userage} years old`)

//que3

let months=4
switch(months){
    case(1):
    console.log("jan, feb, march")
break;
case(2):
console.log("april,may,june")
break;
case(3):
console.log("july,aug,sept")
break;
case(4):
console.log("oct,nov,dec")
break;

}

