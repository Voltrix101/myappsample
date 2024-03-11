//Function that can call itself
let num=1;
function show(){
    console.log("hi",num);
    num++; //lifo
    if(num<6)
    show();
}

