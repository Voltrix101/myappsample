let alien={
    name:'Amrito',
    tech:'js',
    laptop:{
        cpu: 'i7',
        ram:8,
        brand:'Acer'
    }
}
for(let key in alien)
{
    console.log(key,alien[key]) //used for key
}
for(let key in alien.laptop)
{
    console.log(key,alien.laptop[key])
}