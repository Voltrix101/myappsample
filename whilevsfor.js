let rev=0;
for(let i=1;i<=100;i++)
{
    if(i%3==0)
    console.log(i);
        
}
let num=123456
while(num>0)
{
    rev=rev*10+num%10;
    num=parseInt(num/10);
}
console.log("Reverse of the number is" +rev);