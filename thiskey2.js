let laptop1={
    cpu:'i9',
    ram:16,
    brand:'Acer',
    getConfig:function(){
        console.log(this.cpu);
    }
}
let laptop2={
    cpu:'i7',
    ram:16,
    brand:'HP',
    getConfig:function(){
        console.log(this.cpu);
    }
}
function getFastLaptop(laptop1,laptop2)
{
    if(laptop1.cpu>laptop2.cpu)
{
    console.log(laptop1);

}
else
    console.log(laptop2);
}
getFastLaptop(laptop1,laptop2);
laptop1.compare(laptop2);