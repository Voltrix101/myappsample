let laptop1={
    cpu:'i9',
    ram:16,
    brand:'Acer',
    compare: function(other){
        if(this.cpu>other.cpu)
        {
            console.log(this);
        
        }
        else
            console.log(other);
        },

    
    getConfig:function(){
        console.log(this.cpu);
    },
}
let laptop2={
    cpu:'i7',
    ram:16,
    brand:'HP',
    getConfig:function(){
        console.log(this.cpu);
    }
}
laptop1.compare(laptop2);