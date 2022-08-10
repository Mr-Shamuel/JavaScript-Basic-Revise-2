const friends =  ["Rashida","Sultana","shameulmolla","Risha","shawon"];
const friends2 =  [2,3,5,23,5,3,45,7543,2,22];
const numberSlice = friends.slice(1,4); //slice original array will not change
// const numberSplice = friends.splice(1,3); //splice Original Array will change
const numberSplice2 = friends2.splice(4,0,2222); //splice Original Array will change
console.log(numberSlice);
// console.log(numberSplice);
console.log(numberSplice2);