let nums=[42,51,24,98,65,12];
let result=nums.filter(n => n % 2 === 0) //filter
    .map(n =>n*2)           //map
    .reduce((a,b) => a+b);   //reduce
console.log(results);
