function Alien(name,tech){
 this.name=name;
 this.tech=tech;
 this.work=function(){
    console.log("Solving bugs from 12 hours");
 }
}
let alien1=new Alien('Amrito','JS');
let alien2=new Alien('Shredex','"Unity');
alien1.tech='Blockchain';
console.log(alien1);
alien1.work();

