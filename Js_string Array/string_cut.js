const anthem = "Amar Sonar bangla ami tomay vlaobashi";
const anthem2 = ["Rashida","Sultana","Risha","shawon"];

const wordSlice =anthem.slice(5,10); //slice 
const wordSplit = anthem.split(' '); //split
const wordSplit2 = anthem.split(',').join(); //split
const wordSubstr = anthem.substr(10,17); //substr
 const wordConCat =anthem.concat(" I also love Javascript@@");//concat
 const wordJoin = anthem2.join("*** ")//join
console.log(wordSlice); 
console.log(wordSplit); 
console.log(wordSplit2); 
console.log(wordSubstr); 
console.log(wordConCat); 
console.log(wordJoin); 