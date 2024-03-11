let user='Navin'
function greet(u)
{
    let num=5;
    console.log(user); //hoisting
    return `Hello, ${u}!`
}
let str=greet(user);
console.log(str);
function add(num1,num2,num3=1)
{
    return num1+num2+num3;
}
let result=add(5,6,5);
console.log(result);