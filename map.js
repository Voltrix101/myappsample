//map has key and value pair
//map is a class
let map = new Map();
map.set("Amrito","JS");
map.set("Aditya","Crypto");
map.set("Aniket","Film");
map.set("Amrito","Blockchain");
console.log(map.get("Amrito"));
for(let [k,v] of map)
{
    console.log(k+" : "+v);
}
map.forEach((v,k) =>{   //value first index second
    console.log(k,":",v);
});


