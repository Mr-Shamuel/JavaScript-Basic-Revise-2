function megaFriend(friends){
    if(Array.isArray(friends) ==false){
        alert("plrsdr provide an array!!");

    }
    let mega =friends[0];
    for(const friend of friends){
        if(friend.length > mega.length){
          mega =friend;
        }

    }
    return mega;
}

const friends =  ["Rashida","Sultana","shameulmolla","Risha","shawon"];
const result = megaFriend(friends);
console.log(result);

//includes

const name =friends.includes('Rashida'); //includes
console.log(name); 
//index of 
if(friends.indexOf("Rashida") != -1){
    console.log("Rashida name is here!!")
}
//concat
const wordConcat = friends.concat(["sam"],'Shamuel');
console.log(wordConcat); 

