//set will not have repeated values
//set will  only store unique values.
//set is ordered in js
let nums= new Set("bookeeper");
console.log(nums);
let nums2= new Set();
nums2.add(3);
nums2.add(4);
nums2.add("Navin");
nums2.add("Kiran");
nums2.add("Chirag");
nums2.add(3);
//console.log(nums2);
nums2.forEach(value =>{
    console.log(value);
});
console.log(nums2.has("Navin"));


